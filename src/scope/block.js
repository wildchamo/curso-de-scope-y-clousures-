const fruits = ()=>{
    if (true){
        var fruits1='apple';
    }
    let fruits2='banana';
    const fruits3='kiwi'
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}

fruits();

const fruits = ()=>{
    if (true){
        var fruits1='apple';
        let fruits2='banana';
        const fruits3='kiwi'
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}

fruits();
//con let y const no podes llamarlo desde otro lugar que no sea el bloque donde lo declaraste!

let x=1;
{
    let x=2;
    console.log(x);
}

console.log(x);

var x=1;
{
    var x=2;
    console.log(x);
}

console.log(x);


const anotherFunction=()=>{
    for(let i=0;i<10;i++){
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}
anotherFunction();