const jwt = require('jsonwebtoken')

const verifyToken = async(req,res,next)=>{
    const {query} = req.body 
     if(query.includes('authenticate') || query.includes('createEncryptedUser') || query.includes('GetInviteDataQuery') || (query.includes("IntrospectionQuery") && query.includes("fragment FullType on __Type")) ){
        console.log('Teraj dalje !')
    }
   else{
        try{ 
                let token = req.headers['x-access-token'] || req.headers['authorization']; 
                // Express headers are auto converted to lowercase
                if(token == null){
                    token = "not Valid"
                }
                    // Remove Bearer from string

                    token = token.slice(7, token.length).trimLeft();
                
                    const payload = jwt.verify(token,process.env.JWT_SECRET)

               }
            catch(err){
                console.log(err)
                return res.status(403).json("Not Authorized")
            }
        }
        next();

}

module.exports = verifyToken