const getIncrementado = (()=>{
    let i = 0;
    return ()=>{
        i++;
        return i;
    }
})();

const getCondicion = ({...arg})=>{
    return (true) 
        ? (arg.inc = getIncrementado(), arg ) 
        : null;
};
export const tags = {
    getIncrementado,
    getCondicion
}

