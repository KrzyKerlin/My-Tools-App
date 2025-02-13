<template>
    <v-container class="d-flex flex-column align-center">
      <h1 class="mb-4 text-center text-indigo-darken-4">WebP Converter</h1>
  
      <v-card class="d-flex justify-center align-center" elevation="2" height="60vh" max-width="90%" width="100%">
        <input type="file" @change="loadImage" ref="fileInput" class="d-none" id="fileInput" />
        <canvas ref="canvas" class="w-100 h-100"></canvas>
  
        <v-btn v-if="!imgLoaded" color="primary" @click="triggerFileInput" class="position-absolute">
          Upload Image
        </v-btn>
      </v-card>
    </v-container>
</template>
  
<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const fileInput = ref(null);
    const canvas = ref(null);
    const imageLoaded = ref(false);
    let img = new Image();

    // Open file selection dialog
    const triggerFileInput = () => {
      fileInput.value.click();
    };

    // Load selected image and render it on canvas
    const loadImage = (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        img.onload = () => {
          const ctx = canvas.value.getContext("2d");

          // Set canvas size to match the image
          canvas.value.width = img.width;
          canvas.value.height = img.height;

          // Draw image on canvas
          ctx.drawImage(img, 0, 0);
          imageLoaded.value = true;
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    };

    // Set the background on component mount
    onMounted(() => {
        document.body.style.background = 'linear-gradient(to right, #614385, #516395)';
    });

    // Reset the background when the component is removed
    onUnmounted(() => {
        document.body.style.background = ''
    });

    return {
      fileInput,
      canvas,
      imageLoaded,
      triggerFileInput,
      loadImage,
    };
  },
};
</script>
  