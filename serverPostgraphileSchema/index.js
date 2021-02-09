const { graphql } = require('graphql')
const express = require('express')
const { postgraphile, makePluginHook  } = require('postgraphile')
const cors = require('cors')
require('dotenv').config()
const schemaName = process.env.POSTGRES_SCHEMA
const database = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5433/${process.env.POSTGRES_DATABASE}`
const graphqlBodyParser = require('body-parser-graphql')
const verifyToken = require('./auth/verifyToken')
const sendEmailToUser = require('./helpers/sendMail')
const bodyParser = require('body-parser')
const { default: PgPubsub } = require("@graphile/pg-pubsub")

//plugins
const invitePlugin = require('./plugins/invitePlugin')
const MessagesSubscriptionPlugin = require('./plugins/MessagesSubscriptionPlugin')

const pluginHook = makePluginHook([PgPubsub])

const PORT = process.env.PORT || 5000

server = express()

server.use(cors())

server.use(bodyParser.json())

server.use(graphqlBodyParser.graphql())

server.use('/sendemail',sendEmailToUser)

server.use('/graphql', verifyToken)

server.use(
  postgraphile(database, schemaName, {
    pluginHook,
    subscriptions: true,
    simpleSubscriptions: true,
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    exportJsonSchemaPath: '../client/schema.json',
    exportGqlSchemaPath: './exportedSchema/schema.gql',
    appendPlugins: [
     require('@graphile-contrib/pg-simplify-inflector'),
      invitePlugin,
      MessagesSubscriptionPlugin
    ],
    jwtSecret: `${process.env.JWT_SECRET}`,
    jwtPgTypeIdentifier: 'chatapp.jwt_token',
  })
)

server.listen(PORT, () => {
  console.log('server is running with postgraphile' + database)
})
