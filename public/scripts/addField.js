// procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField)

// executar uma acao
function cloneField() {
    //duplicar os campos, que campos?
 const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true ou false

    //pegar os campos. que campos?
    const fields = newfieldContainer.querySelectorAll('input')
    
    // fields[0].value = ""
    // fields[1].value = ""
    // para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento
       field.value = ""
        
    })

    //colocar na pagina: onde??
    document.querySelector('#schedule-items').appendChild(newfieldContainer)
}