import Model from '../model' 
import bcrypt, { hash } from 'bcrypt'
const Users = {
  ...Model,
  key: 'users',
  permittedAttrs: ['email'],

  create(email, password) {
    return new Promise((resove, reject) => {
      bcrypt.hash(password, 12, (err, hash) => {
        if(err) return reject(err)

        const collection = this.collection()
        const user = {
          id: collection.length + 1,
          email,
          password: hash,
          isAdmin: false
        }
  
        this.setCollection([...collection, user])
        return resove(user)
      })
    })
  }
}

export default Users