
//scope local: solamente acceder a un codigo desde esta estructura
const soyUnaFuncion =()=>{
    const hello='hellopai';
    console.log(hello);
}

soyUnaFuncion();
console.log(hello);
//magia magica. La varaible solo esta definida de manera local!!! 

var scope = "soy global";

const functionScope =()=>{
    //ambito lexico 
    var scope="soy solamente local";
    const func= () =>{
        return scope;
    }
    console.log(func());
}

functionScope();
console.log(scope);