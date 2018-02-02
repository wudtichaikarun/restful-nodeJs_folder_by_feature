import Model from '../model'

const Articles = {
  ...Model,
  key: 'articles',
  permittedAttrs: ['title','content', 'authorId']
}

export default Articles