const moneybox =(coins)=>{
    var saveCoins=0;
    saveCoins+= coins;  
    console.log(`Money box: $${saveCoins}`)
}

moneybox(5);
moneybox(10);
// no sirve lo de arriba 


const anotherFunction =()=>{
    var savedCoins=0;
    const countCoins=(coins)=>{
        savedCoins+=coins;
        console.log(`Money box: $${savedCoins}`)
    }
    return countCoins;
}

let myMoneyBox= anotherFunction();

myMoneyBox(4);// 4
myMoneyBox(10); // 14






