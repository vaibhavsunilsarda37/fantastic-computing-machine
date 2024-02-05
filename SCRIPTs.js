document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const h1Element = document.querySelector('h1');

    changeColorBtn.addEventListener('click', function() {
        const randomColor = getRandomColor();
        h1Element.style.color = randomColor;
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});