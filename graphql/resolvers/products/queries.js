const { getAllProductsDto, getProductByIdDto } = require("../../../DTO/productDto");

module.exports.productQueries = {
    products: async () => await getAllProductsDto(),
    product: async (_, { productId }, context ) => {
      // aqui puedo usar context para validar el usuario
      const resp = await getProductByIdDto ( productId )
      return resp[0]
    },
}