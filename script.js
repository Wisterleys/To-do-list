let btn = document.querySelector('.btn');
let input = document.querySelector('.texto').addEventListener('keypress',function(event){
    if(event.keyCode === 13){
        //btn.addEventListener('click', function(){
            let texto = document.querySelector('.texto').value
            let lista = document.querySelector('ul');
            let item = document.createElement('li');
            let noTexto = document.createTextNode(texto)
            item.appendChild(noTexto)
            lista.appendChild(item)
            removerItem(item)
            editarItem(item)
        //})
    }
})



function removerItem(texto){
    let btn = document.createElement('input');
    btn.setAttribute('type','button')
    btn.setAttribute('value','x')
    texto.appendChild(btn)  
    btn.addEventListener('click',function(){
        texto.remove();
    }) 
}

/* function editarItem(texto){
    let btn = document.createElement('input');
    btn.setAttribute('type','button');
    btn.setAttribute('value','editar');
    
    texto.appendChild(btn)
    
    btn.addEventListener('click', function(){
        let input = document.querySelector('.texto');//ola1
          
             if(input.value !== texto.childNodes[0].nodeValue){
                 //input.value = texto.childNodes[0].nodeValue 
                 texto.childNodes[0].nodeValue = input.value;
                 
                
            
        }else{
            console.log('é igual')
        } 
    })
} */



