
const draggableItems = document.querySelectorAll(".photo-frame, .draggable-image");

let activeItem = null;
let offsetX = 0;
let offsetY = 0;

draggableItems.forEach(item => {

    item.addEventListener("mousedown", (e) => {

        activeItem = item;

        const rect = activeItem.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        activeItem.style.left = `${rect.left}px`;
        activeItem.style.top = `${rect.top}px`;
    });

});

document.addEventListener("mousemove", (e) => {

    if(!activeItem) return;

    activeItem.style.left = `${e.clientX - offsetX}px`;
    activeItem.style.top = `${e.clientY - offsetY}px`;

});

document.addEventListener("mouseup", () => {
    activeItem = null;
});


const hearts = document.querySelectorAll(".draggable-image");

hearts.forEach(heart => {

    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 150);

    heart.style.left = `${randomX}px`;
    heart.style.top = `${randomY}px`;

});