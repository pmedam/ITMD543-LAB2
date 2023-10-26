//Javascript used in CSS.HTML to show a popup at the bottom of the page

function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }


  
//Javascript used in Javascript.HTML
document.getElementById("colorButton1").addEventListener("click", () => {
    const text = document.querySelector("#example1 p");
    text.style.color = getRandomColor();
});

// Example 2: Counter
let count = 0;
const countElement = document.getElementById("count");
document.getElementById("increment").addEventListener("click", () => {
    count++;
    countElement.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
    count--;
    countElement.textContent = count;
});

// Example 3: Toggle Visibility
const toggleText = document.getElementById("toggleText");
document.getElementById("toggleButton").addEventListener("click", () => {
    toggleText.style.display = toggleText.style.display === "none" ? "block" : "none";
});

// Example 4: Mouse Coordinates
document.getElementById("example4").addEventListener("mousemove", (event) => {
    const coords = `Mouse Coordinates: (${event.clientX}, ${event.clientY})`;
    document.getElementById("mouseCoords").textContent = coords;
});

// Example 5: Random Color
document.getElementById("colorButton2").addEventListener("click", () => {
    const randomColorBox = document.getElementById("randomColorBox");
    randomColorBox.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
