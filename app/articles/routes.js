import controller from './controller'

export function setup(router) {
  router
    .get('/:id', controller.get)
    .get('/', controller.getAll)
    .post('/', controller.create)
    .patch('/', controller.update)
    .delete('/', controller.delete)
}