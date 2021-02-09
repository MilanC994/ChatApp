const sendEmailToUser = require('../helpers/sendMail')
 
 function invitePlugin(builder) {
    builder.hook(
      'GraphQLObjectType:fields:field',
      (field, build, { scope: { isRootMutation, fieldName }, addArgDataGenerator }) => {
        if (!isRootMutation || fieldName !== 'createInviteByEmail') {
          return field
        }
        const defaultResolver = obj => obj[fieldName]
        const { resolve: oldResolve = defaultResolver, ...rest } = field
        return {
          ...rest,
          async resolve(...resolveParams) {
             
            const [, request, pgConn, query] = resolveParams
            //const {
             // helpers: { getPropertyFromJwt }
            //} = pgConn
            const email = request.input.emailinp
            const result = await oldResolve(...resolveParams)
            const stringifyed = JSON.stringify(result.data) 
            const inviteId = stringifyed.slice(stringifyed.search("id")+5,stringifyed.search("id")+41)
            await sendEmailToUser(inviteId,email)
            return result
          }
        }
      }
    )
  }

  module.exports = invitePlugin