// MySubscriptionPlugin.js
const { makeExtendSchemaPlugin, gql, embed } = require("graphile-utils")
// or: import { makeExtendSchemaPlugin, gql, embed } from 'graphile-utils';

const roomMessages = async (_args, context, _resolveInfo) => {
return `graphql:message:${_args.input.room_id}`
}

module.exports = makeExtendSchemaPlugin(({ pgSql: sql }) => ({
  typeDefs: gql`
    type MessageSubscriptionPayload {
      # This is populated by our resolver below
      message: Message! 

      # This is returned directly from the PostgreSQL subscription payload (JSON object)
      event: String
    }
    input MessageSubscriptionInput {
        room_id: UUID
      }

    extend type Subscription {
      """
      Triggered when the current user's data changes:

      - direct modifications to the user
      - when their organization membership changes
      """
      messagesUpdated(input:MessageSubscriptionInput): MessageSubscriptionPayload @pgSubscription(topic:  ${embed(
        roomMessages
      )})
    }
  `,

  resolvers: {
    MessageSubscriptionPayload: {
      // This method finds the user from the database based on the event
      // published by PostgreSQL.
      //
      // In a future release, we hope to enable you to replace this entire
      // method with a small schema directive above, should you so desire. It's
      // mostly boilerplate.
      async message(
        event,
        _args,
        _context,
        { graphile: { selectGraphQLResultFromTable } }
      ) {
        const rows = await selectGraphQLResultFromTable(
          sql.fragment`chatapp.message`,
          (tableAlias, sqlBuilder) => {
            sqlBuilder.where(
              sql.fragment`${tableAlias}.room_id = ${sql.value(event.subject)}`
            )
          }
        )
        return rows[0]
      },
    },
  },
}))