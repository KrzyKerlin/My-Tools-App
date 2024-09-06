const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const previewText = document.querySelector('.gradient-text');
let direction = 'to right';

function updateGradient() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    const gradientCSS = `linear-gradient(${direction}, ${color1}, ${color2})`;

    // Update gradient preview text
    previewText.style.background = gradientCSS;
    previewText.style.webkitBackgroundClip = 'text';
    previewText.style.webkitTextFillColor = 'transparent';
    previewText.style.backgroundClip = 'text';
    previewText.style.color = 'transparent';

}

// Event listeners
color1Input.addEventListener('input', updateGradient);
color2Input.addEventListener('input', updateGradient);

// Gradient direction
document.querySelectorAll('.direction-btn').forEach(button => {
    button.addEventListener('click', () => {
        direction = button.getAttribute('data-direction');
        updateGradient();
    });
});

updateGradient();


