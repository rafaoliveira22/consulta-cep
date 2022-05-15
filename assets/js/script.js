const boxCep = document.querySelector('input#txtCep')
const cep = boxCep.value

const BASE_URL = `https://viacep.com.br/ws/06526020/json/`


const getAddress = async() =>{
    try{
        const data = await fetch(BASE_URL)
        const json = await data.json()
        const dataJson = [json.localidade,json.bairro,json.logradouro]
        
        return dataJson
    } catch(e){
        console.log(e.message)
    }
} // getAddress

const loadAddress = async() =>{
    const street = document.querySelector('output#street')
    street.innerHTML = await getAddress()
} // loadAddress


const btn = document.querySelector('button#consult-address')
btn.addEventListener('click', loadAddress)






