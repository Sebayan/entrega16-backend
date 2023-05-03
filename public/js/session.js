const socket = io.connect()

async function userLogged() {
  let user
  await fetch(`http://localhost:${location.port}/session/`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      user = data.user
    })
  return user
}



function userLoggedTemplates(user) {
  document.querySelector('#sessionUser').innerHTML = logOkTemplate(user)
  document.querySelector('#newProduct').innerHTML = newProductTemplate()
}



function productLoad() {
  const socket = io.connect()
  const formulario = document.getElementById('formulario')
  formulario.addEventListener('submit', e => {
    e.preventDefault()
    const producto = {
        title: formulario[0].value,
        description: formulario[1].value,
        code: Number(formulario[2].value),
        price: Number(formulario[3].value),
        stock: Number(formulario[4].value),
        thumbnail: formulario[5].value
    }
    if (validateObject(producto)){
      alert('Complete todos los datos del producto')   
    } else {
      socket.emit('update', producto)
      formulario.reset()
    }
  })
}



async function userLogout( user ){
  fetch(`http://localhost:${location.port}/session/logout/`, {
    method: 'POST',
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data.message)
  })
  document.querySelector('#sessionUser').innerHTML = logByeTemplate( user )
  await setTimeout(() => {
    location.reload()
  }, 2000)
}

function logged( user ){
  userLoggedTemplates( user )
  productLoad()
  document.getElementById("logoutBtn").addEventListener("click", ev => {
    userLogout( user )
  })

}