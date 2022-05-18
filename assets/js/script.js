const BASE_URL = `https://viacep.com.br/ws/01001000/json/`

const getAddress = async() =>{
    try{
        const strCep = document.querySelector('input#txtCep').value

        if(strCep == '' || strCep.length > 8){
            showInvalidCep()
        } else{ 
            cep = Number(strCep)    
            const BASE_URL = `https://viacep.com.br/ws/0${cep}/json/`

            const data = await fetch(BASE_URL)
            const json = await data.json()
            const dataJson = [json.localidade,json.bairro,json.logradouro]

            return dataJson
        } // else
    } catch(e){
        console.log(e.message)
        showInvalidCep()
    } // try
} // getAddress

const loadAddress = async() =>{
    const street = document.querySelector('output#street')
    street.innerHTML = '<strong>' + await getAddress() + '</strong>'


} // loadAddress


const btn = document.querySelector('button#consult-address')
btn.addEventListener('click', loadAddress)

function showInvalidCep(){
    alert("[ERRO] Cep inválido 😞")
}








