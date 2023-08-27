//function scope

function saludo(){
    let userName= "Juan"
    console.log(`hola ${userName}`)

    if(userName==="Juan"){
        console.log("holaa" + userName)
    }
}

saludo()
console.log(userName)