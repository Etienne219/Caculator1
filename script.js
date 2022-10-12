const buttons = document.querySelectorAll('button');
const arrayOfButtons = Array.from(buttons);
const testBtn = document.getElementById("allClear");
const display = document.querySelector(".screenOutput");

arrayOfButtons.forEach(btn => {
    btn.addEventListener('click', ()=>{
        display.textContent = btn.textContent;
    })
});
