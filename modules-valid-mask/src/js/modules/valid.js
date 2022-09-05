export default const validaCPF = (cpf) => {
    if(cpf.lenght !== 14)
        return false;
    let cpfArray = cpf.split('')
    cpfArray.splice(3, 1)
    cpfArray.splice(6, 1)
    cpfArray.splice(9, 1)
    console.log(cpfArray)
    return true;
}
