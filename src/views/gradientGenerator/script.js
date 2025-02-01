import { ref, watch, onMounted, onUnmounted } from 'vue';

// Main gradient logic
export function useGradientLogic() {
  const color1 = ref('#0000ff'); 
  const color2 = ref('#09cbfb'); 
  const direction = ref('to right'); 
  const cssCode = ref('');  

  const directions = [
    { value: 'to right', icon: '→' },
    { value: 'to left', icon: '←' },
    { value: 'to bottom', icon: '↓' },
    { value: 'to top', icon: '↑' },
    { value: 'to bottom right', icon: '↘' },
    { value: 'to bottom left', icon: '↙' },
    { value: 'to top right', icon: '↗' },
    { value: 'to top left', icon: '↖' },
  ];

  // Update the gradient
  const updateGradient = () => {
    const gradientCSS = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;

    document.body.style.background = gradientCSS;

    const gradientText = document.querySelector('.gradient-text');
    if (gradientText) {
      gradientText.style.background = gradientCSS;
      gradientText.style.webkitBackgroundClip = 'text';
      gradientText.style.webkitTextFillColor = 'transparent';
      gradientText.style.backgroundClip = 'text';
      gradientText.style.color = 'transparent';
    }

    // copy CSS code
    cssCode.value = `
      background: ${gradientCSS};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      `;
  };

  // Clearing styles when leaving a component
  onMounted(updateGradient);
  onUnmounted(() => {
      document.body.style.background = ''; 
  });

  // Track changes in color values ​​and direction
  watch([color1, color2, direction], updateGradient, { immediate: true });

  // Set a new gradient direction
  const setDirection = (dir) => {
    direction.value = dir;
  };

  // Copying CSS code
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode.value).then(() => {
      const button = document.getElementById('copyCode');
      if (button) {
        button.textContent = 'Copied :)';
        setTimeout(() => {
          button.innerHTML = '<i class="fas fa-copy"></i> Copy Code';
        }, 2000);
      }
    });
  };

  return {
    color1,
    color2,
    direction,
    cssCode,
    directions,
    setDirection,
    copyToClipboard,
  };
}
