<template>
    <v-container class="d-flex flex-column align-center">
      <h1 class="mb-4 text-center text-indigo-darken-4">WebP Converter</h1>
      <div class="editor">
        <input type="file" @change="loadImage" ref="fileInput" />
        <canvas ref="canvas"></canvas>
      </div>
    </v-container>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from "vue";
  
  export default {
    name: "WebPConverter",
    setup() {
      const img = ref(null);
      const canvas = ref(null);
      let originalBackground = ""; // Przechowanie oryginalnego tła
  
      const loadImage = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            img.value = new Image();
            img.value.onload = () => {
              const ctx = canvas.value.getContext("2d");
              canvas.value.width = img.value.width;
              canvas.value.height = img.value.height;
              ctx.drawImage(img.value, 0, 0);
            };
            img.value.src = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      };
  
      onMounted(() => {
        originalBackground = document.body.style.background;
        document.body.style.background = "linear-gradient(to right, #614385, #516395)";
      });
  
      onUnmounted(() => {
        document.body.style.background = originalBackground;
      });
  
      return {
        canvas,
        loadImage,
      };
    },
  };
  </script>
  