let listado = (arrayPalabras) => arrayPalabras.map((palabra,index) => {

    if(index==0){
        console.log(`<ul>`)
        console.log(`<li>${palabra}</li>`)
    }else{
        
        if(index > 0 && index < arrayPalabras.length){
            console.log(`<li>${palabra}</li>`)
        }

        if(index == (arrayPalabras.length -1)){
            console.log(`</ul>`)

        }
            
    }
    
})


export default listado;