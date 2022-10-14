const arrayOfButtons = Array.from(document.querySelectorAll('button'));
const display = document.querySelector(".screenOutput");

arrayOfButtons.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        switch (e.target.innerText) {
            case "AC":
                display.innerText = "";
            break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                  } catch {
                    display.innerText = "Error";
                  }
            break;
            default:
                display.innerText += e.target.innerText;
            break;
        }
    })
});

