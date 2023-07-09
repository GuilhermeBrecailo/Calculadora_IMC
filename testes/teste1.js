function calculate(){
    var height=(document.getElementById("height").value)/100;
    var weigth=document.getElementById("weigth").value;

    
    var imc= weigth / height ** 2;
    var text=""
    if(imc<18.5){
        text="Você está magro"
    }else if(imc<24.9){
        text="Você está normal"
    }else if(imc<29.9){
        text="Você está sobrepeso"
    }else if(imc<39.9){
        text="Você está  com obesidade"
    }
    document.getElementById("text_area").innerText=text
}