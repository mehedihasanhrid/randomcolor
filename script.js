const containerEl = document.querySelector(".container");

for (let index = 0; index < 48; index++) {
    const colorEl = document.createElement("div");
    colorEl.classList.add("box");
    containerEl.appendChild(colorEl);
}

const colors = document.querySelectorAll(".box");

genColor();

function genColor(){
    colors.forEach((colorEl) =>{
        const newColor = randColor();
        console.log(newColor);
        colorEl.style.backgroundColor = "#" + newColor;
        colorEl.innerText =  "#" + newColor;
    }
);
}

function randColor(){
    const chars = "0123456789abcdef";
    let color = "";
    for (let index = 0; index < 6; index++) {
        const ranNum = Math.floor(Math.random()*16);
        color += chars.substring(ranNum , ranNum + 1);
    }
    return color;
}