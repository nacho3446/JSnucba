let pizzas = [
    {id:1,
     nombre:"simple",
     ingredientes: ['queso','tomate','oregano'],
     precio: 500,
     img: '/assets/simple.jpg',
    },

    { id:2,
      nombre:"completa",
      ingredientes: ['queso','jamon','anchoas','salsa','aceitunas','oregano'],
      precio: 1000,
      img: '/assets/completa.jpg',
    },

    {id:3,
     nombre:"especial",
     ingredientes: ['muza','salsa','morron','jamon','aceitunas','oregano'],
     precio: 1300,
     img: '/assets/especial.jpg',
    },

    {id:4,
      nombre:"rucula",
      ingredientes: ['queso','salsa','jamon','rucula'],
      precio: 1400,
      img: '/assets/rucula.jpg',
    },

    {id:5,
      nombre:"palmito",
      ingredientes: ['queso','salsa','morron','jamon','palmitos'],
      precio: 1300,
      img: '/assets/palmitp.jpg',
    },

    { id:6,
      nombre:"muza",
      ingredientes: ['muza','salsa','morron','oregano'],
      precio: 800,
      img: '/assets/muzzarella.jpg',
    },
  ]






const pizzaNumber = document.getElementById('pizzaNumber');
const submitBtn = document.getElementById('submit');
const price = document.getElementById('precio');
const pizzaName = document.getElementById('pizza-name');
const contenedor = document.getElementById('contenedor');
const img = document.getElementById('img');



let pizzasNuevo = [];
localStorage.setItem('pizzas', JSON.stringify(pizzas))



// ------------------


const pizzaValue = e =>{
  e.preventDefault();


  const filterText = pizzaNumber.value;
  if(!filterText.length){
      alert('Por favor, selecciona un valor');
      return;
  } else if (pizzasNuevo = pizzas.find((pizza) => pizza.id == filterText)){

    pizzaName.innerHTML = `<p class="infopizzas">La Pizza ${pizzasNuevo.nombre} contiene: ${pizzasNuevo.ingredientes}</p>`;

    price.textContent = `Tiene un costo de $${pizzasNuevo.precio}`;

    img.innerHTML = `<img src="${pizzasNuevo.img}" class="fotos">`



  return;
} else {

  alert ('Por favor, seleccione un valor valido');

  return;
}
}




let init = () =>{
    submitBtn.addEventListener('submit', pizzaValue);
};

init();








