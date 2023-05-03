const { addUserDto } = require("../../../DTO/userDto")


const validateEmail = ( email ) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return email.match(mailformat) !== null
  }


module.exports.userMutations = {
    addUser: async(_, { user }) => {
        if ( validateEmail( user.email ) ) {
            await addUserDto ( user.email, user.password )
            return true
        }
        return false
    }          
}