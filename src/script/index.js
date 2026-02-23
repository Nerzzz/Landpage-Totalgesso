function sendMessage(context){
    const message = `Olá, gostaria se mais informações sobre *${context}*`;
    window.open(`https://wa.me/5519999078738?text=${message}`, "_blank");
}

let isOpen = false
function asideCtrl(){
    const aside = document.getElementsByTagName("aside")[0];
    if(!isOpen){
        aside.classList.add("show");
        isOpen = true;
    }
    else{
        aside.classList.remove("show");
        isOpen = false;
    }
}