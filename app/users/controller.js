import Users from './model'
import UserSerializer from './serializer'
const UsersController = {
  getAll(req, res) {
   res.json({
     users: UserSerializer.for('getAll',Users.findAll())
   })
  },

  get(req, res) {
    res.json({
      user: UserSerializer.for('get', Users.find(req.params.id))
    })
  },

  create(req, res) {
    const { email, password } = req.body

    Users.create(email, password).then(
      user => res.status(201).json({
        user //UserSerializer.for('create', user)
      })
    )
  }
}

export default UsersController