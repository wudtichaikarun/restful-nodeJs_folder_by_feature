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
    const user = UserSerializer.for('create',Users.create({ email: req.body.email}))
    res.json({
      user
    })
  }
}

export default UsersController