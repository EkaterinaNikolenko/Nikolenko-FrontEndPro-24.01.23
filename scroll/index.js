const container = document.querySelector("#container");
const card_container = document.querySelector("#card-container");
const body = document.querySelector("body");
console.log(card_container);

const getRandomColor = () => {
    const h = Math.floor(Math.random() * 360);
    return `hsl(${h}deg, 80%, 75%)`;
};

const loadMore = () => {
    body.style.height = document.body.offsetHeight + 20 + "px";
    for(let i = 0; i < 15; i++) {
        let card = document.createElement("div");
        card.className = "card";
        card.style.backgroundColor = getRandomColor();
        card_container.append(card);
        // loading.hidden = true;
    }
}

const loading = () => {
    const loadingText = document.createElement("p");
    loadingText.innerText = "loading...";
    loadingText.hidden = true;
    container.after(loadingText)
}
  

window.addEventListener("scroll", () => {
    console.log("scrolled", window.scrollY); //scrolled from top
    console.log(window.innerHeight);
    console.log(document.documentElement.scrollHeight);
    
    if(Math.round(window.scrollY) + window.innerHeight >= document.documentElement.scrollHeight) {
        // loading.hidden = false;
        setTimeout(loadMore, 1000);
    }
})

loadMore();

