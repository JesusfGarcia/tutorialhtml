//const num1 = 5;
/*const num2 = 5;

console.log("suma => ", num1 + num2);
console.log("restar => ", num1 - num2);
console.log("multiplicar => ", num1 * num2);
console.log("dividir => ", num1 / num2);
console.log("residuo => ", num1 % num2);
console.log("igual => ", num1 === num2);*/

/*const function2 = (num1, num2) => {
  if (num1 === num2) {
    console.log("son iguales");
  } else if (num1 > num2) {
    console.log("número 1 es mayor");
  } else {
    console.log("número 2 es mayor");
  }
};

function2(10, 10)*/

/*const myArray = ["jesus", "grabiel", "juanita"];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}*/

//const myArray = ["jesus", "grabiel", "juanita"];

/*for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray[i].length; j++) {
    console.log(myArray[i][j]);
  }
}*/
//onblur, onclick, ondblclick, onfocus, onload, onresize

const Click = () => {
  console.log("Se ha hecho click en la carta");
};
const seleccionado = () => {
  console.log("se esta haciendo focus en este elemento");
};
const no_seleccionado = () => {
  console.log("se ha pasado a otro elemento");
};
const cargoPagina = () => {
  console.log("La página terminó de cargar");
};
const cambiodetamaño = () => {
  console.log("La página cambió de tamaño");
};

/*class Rectangulo {
  constructor(ancho, largo) {
    this.ancho = ancho;
    this.largo = largo;
  }

  calArea() {
    return this.ancho * this.largo;
  }
}
const miRectangulo = new Rectangulo(10, 20);
console.log(miRectangulo);
console.log(miRectangulo.calArea());

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

class Perros extends Animal {
  ladrar() {
    console.log(this.nombre, " esta ladrando");
  }
}


const p = new Perros('tobi');

p.ladrar();*/

//getElementsById-Classname
//createElement, createTextNode
//appendChild, removeChild
//childNodes
//classname

/*let carta = document.getElementById("card");

let parrafo = document.createElement("p");
let contenido = document.createTextNode("Hola mundo, soy un contenido");

parrafo.appendChild(contenido);

carta.appendChild(parrafo);

carta.removeChild(carta.childNodes[3]);
console.log(carta.childNodes);
console.log(carta);

carta.className = 'carta2';*/
