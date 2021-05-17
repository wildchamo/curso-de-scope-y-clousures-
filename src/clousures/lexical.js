const buidCount = (i) =>{
    let count = i;
    const  displayCount =  ()=>{
        console.log(count++);
    };
    return displayCount;
}

const myCount= buidCount (1);
myCount();
myCount();
myCount();



const myOtherCount= buidCount (10);
myOtherCount()
myOtherCount()
myOtherCount()
