const { addNewProductDto, delProductByIdDto, modifyProductByIdDto } = require("../../../DTO/productDto");

module.exports.productMutations = {
    addProduct: async(_, { productToAdd }) => await addNewProductDto ( productToAdd ),
    delProductById: async(_, { productId } ) => await delProductByIdDto ( productId.id ),
    modifyProductById: async(_, { producToModify }) => await modifyProductByIdDto ( productToModify.id, producToModify )
}