var a = 'hello'

function hello(){
    let b= "hello world"
    const c="world world"

    if(true){
        let d = "hello hello"
        debugger
    }
}

hello();


const anotherFunction =()=>{
    var savedCoins=0;
    debugger
    const countCoins=(coins)=>{
        debugger
        savedCoins+=coins;
        console.log(`Money box: $${savedCoins}`)
    }
    return countCoins;
}

let myMoneyBox= anotherFunction();

myMoneyBox(4);
myMoneyBox(10); 