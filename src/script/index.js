let asideIsOpen = false;

function sendMessage(context){
    const message = `Olá, gostaria se mais informações sobre *${context}*`;
    window.open(`https://wa.me/5519999078738?text=${message}`, "_blank");
}

function asideCtrl(){
    const hideScreen = document.querySelector("#screen-hider").classList;
    const e = document.querySelector("#menu").classList;

    if(!asideIsOpen){
        e.add("show");
        e.remove("hide");
        asideIsOpen = true;

        hideScreen.add("hide-screen");
        hideScreen.remove("show-screen");
    }
    else{
        e.add("hide");
        e.remove("show");
        asideIsOpen = false;

        hideScreen.add("show-screen");
        hideScreen.remove("hide-screen");
    }
}