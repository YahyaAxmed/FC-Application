// JavaScript code to change background color when the button is clicked
const button = document.getElementById('changeColorBtn');
const body = document.body;

button.addEventListener('click', function() {
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}