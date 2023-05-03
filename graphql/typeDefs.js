module.exports.typeDefs = `#graphql
type Product {
  id: ID!
  title: String!
  description: String!
  code: Int!
  price: Int!
  stock: Int!
  thumbnail: String!
}

input ProductToAdd {
  title: String!
  description: String!
  code: Int!
  price: Int!
  stock: Int!
  thumbnail: String!
  id: ID
}

input ProductId {
  id: ID!
}

input User {
  email: String!
  password: String!
}

type Query {
  products: [Product]!
  product(productId: ID!): Product
}

type Mutation {
  addProduct(productToAdd: ProductToAdd!): Product
  delProductById(productId: ProductId!): Boolean
  modifyProductById(productToModify: ProductToAdd): Boolean
  addUser(user: User!): Boolean
}
` 