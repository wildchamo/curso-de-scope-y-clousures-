// asignada de forma global 
var hello= "hello!";
let world = "world";
const helloWorld= 'Hello world';
// console.log(hello)
// es peligroso usar var

const anotherFunction = ()=>{
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction();
//scope global

//practica horrible
const functionMagica= ()=>{
    soyglobal= "soy global pai";
    console.log(soyglobal);
}

functionMagica();
console.log(soyglobal);

