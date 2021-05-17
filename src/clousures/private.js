const person = () =>{
    var saveName= 'Name';
    return {
        getName= ()=>{
            return saveName;
        },
        setName= ()=>{
            saveName=name;
        }
    }
}