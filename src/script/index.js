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

async function loadCards(){
    const url = "../../materials.json";

    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Erro HTTP. Status ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        const carousel = document.querySelector(".carousel");
        const template = document.getElementById("product_card_template");

        data.forEach(e => {
            const clone = template.content.cloneNode(true);

            const card = clone.querySelector(".card");
            card.addEventListener("click", function () {
                sendMessage(e.title);
            });

            clone.querySelector(".img").src = `../../assets/image/materials/${e.img}`;
            clone.querySelector(".img").alt = e.title;
            clone.querySelector(".type").classList.add(e.type);
            clone.querySelector(".type").innerHTML = e.type == "tool" ? "Ferramenta" : "Material";
            clone.querySelector(".title").innerHTML = e.title;
            clone.querySelector(".subtitle").innerHTML = e.subtitle;

            carousel.appendChild(clone);
        });

    } catch (error) {
        console.error(error);
    }
}
loadCards();