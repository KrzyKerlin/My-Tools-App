import { ref, watch, onMounted, onUnmounted } from 'vue';

// Main gradient logic
export function useGradientLogic() {
  const color1 = ref('#0000ff');
  const color2 = ref('#09cbfb');
  const direction = ref('to right');
  const cssCode = ref('');
  const gradientText = ref(null);

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

    // Apply the gradient to the entire background (only within this component)
    document.body.style.background = gradientCSS;

    // Apply gradient effect to the text
    if (gradientText.value) {
      gradientText.value.style.background = gradientCSS;
      gradientText.value.style.webkitBackgroundClip = 'text';
      gradientText.value.style.webkitTextFillColor = 'transparent';
      gradientText.value.style.backgroundClip = 'text';
      gradientText.value.style.color = 'transparent';
    }

    // Generate CSS code
    cssCode.value = `
      background: ${gradientCSS};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
    `;
  };

  // Set the gradient when the component initializes
  onMounted(updateGradient);

  // Reset the background when the component is removed
  onUnmounted(() => {
    document.body.style.background = ''
  });

  // Track changes in color values and direction
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
    gradientText,
    direction,
    directions,
    setDirection,
    cssCode,
    copyToClipboard,
  };
}
