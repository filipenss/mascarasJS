
//Mascara para cnpj

let inputCnpj=document.querySelector
("#cnpj")
inputCnpj.addEventListener("keypress", () ==>
{
    let cnpjLength = inputCnpj.value.length
    if (cnpjLength==2 ||cnpjLength==6 )
    {
        inputCnpj.value+="."
    }

    if (cnpjLength==10)
    {
        inputCnpj.value+="/"
    }
    if (cnpjLength==15)
    {
        inputCnpj.value+="-"
    }
})