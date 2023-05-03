const { Router } = require('express')  
const productRouter = Router() 

const { newProductController, getAllProductsController, getProductByIdController, delProductByIdController, modifyProductByIdController } = require('../controllers/productsController')
const { mock5 } = require('../DAO/mockFaker')
const { logger, loggererr } = require('../log/logger')

const { addProducts } = require('../test/auxfunction') 


productRouter.get(
  '/productos',
  async (req, res) => {
    const products = await getAllProductsController()
    logger.info(`Ruta: /api${req.url}, metodo: ${req.method}`)
    res.json( products )
  }
)


productRouter.get(
  '/productos/:id',
  async (req, res) => {
    const product = await getProductByIdController( req.params.id )
    if ( product ) {
      logger.info(`Ruta: /api${req.url}, metodo: ${req.method}`)
      res.json( product )
    } else {
      loggererr.error(`Producto id: ${req.params.id} no encontrado`) 
      res.status(404).send({ error: 'producto no encontrado'})
    }
  }
)


productRouter.post(
  '/productos/nuevo',
  async (req, res) => {
    const productToAdd = req.body
    const loaded = await newProductController ( productToAdd )
    if ( loaded ) {
      logger.info(`Producto agregado correctamente`)
      res.status(200).send({ msg: 'producto guardado'})
    } else {
      logger.info(`No se pudo agregar producto, datos incorrectos`)
      res.status(400).send({ msg: 'producto no guardado'})
    }
  }
)


productRouter.put(
  '/productos/:id',
  async (req, res) => {
    const response = await modifyProductByIdController( req.params.id, req.body )
    if( response ) {
      logger.info(`Ruta: /api${req.url}, metodo: ${req.method}`)
      res.send({ message: 'producto modificado'})
    } else {
      loggererr.error(`Producto id: ${req.params.id} no encontrado`) 
      res.status(404).send({ error: 'producto no encontrado'})
    }
  }
)


productRouter.delete(
  '/productos/:id',
  async (req, res) => {
    const id = req.params.id
    const response = await delProductByIdController(id)
    if ( response ) {
      logger.info(`Ruta: /api${req.url}, metodo: ${req.method}`)
      res.send({ message: 'producto borrado'})
    } else {
      loggererr.error(`Producto id: ${id} no encontrado`) 
      res.status(404).send({ error: 'producto no encontrado'})
    }
  }
) 


productRouter.get(
  '/productos-test',
  async (req, res) => {
    const allProducts = await mock5.getAll()
    let tabla = '<table>'
    tabla += '<tr><th>Producto</th><th>Precio</th><th>Imagen</th></tr>'
    
    allProducts.forEach((fila) => {
      tabla += `
        <tr>
          <td>${fila.title}</td>
          <td>${fila.price}</td>
          <td><img src="${fila.thumbnail}" alt="${fila.title}" width="64" heigth="48"></td>
        </tr>`
     })
    tabla += '</table>'

    logger.info(`Ruta: /api${req.url}, metodo: ${req.method}`)
    res.send(tabla)

  }
)


productRouter.post(
  '/productos-test-add/:number',
  async (req, res) => {
    addProducts(req.params.number)
    res.send({ message: 'productos agregados'})
  }
)

module.exports = productRouter