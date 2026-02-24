function sendMessage(context){
    const message = `Olá, gostaria se mais informações sobre *${context}*`;
    window.open(`https://wa.me/5519999078738?text=${message}`, "_blank");
}

let isOpen = false
function asideCtrl(){
    const e = document.querySelector("#menu");
    if(!isOpen){
        e.classList.add("show");
        isOpen = true;
    }
    else{
        e.classList.remove("show");
        isOpen = false;
    }
}