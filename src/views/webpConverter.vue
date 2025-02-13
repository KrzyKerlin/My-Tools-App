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

      <v-btn v-if="imgLoaded" color="success" class="mt-3" @click="downloadImage">
        Download WebP
      </v-btn>

    </v-container>
</template>
  
<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const imgLoaded = ref(false);
    const canvas = ref(null);

    // Load the image into canvas
    const loadImage = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            imgLoaded.value = true;
            const ctx = canvas.value.getContext("2d");
            canvas.value.width = img.width;
            canvas.value.height = img.height;
            ctx.drawImage(img, 0, 0);
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    // Trigger file input click
    const triggerFileInput = () => {
      document.getElementById("fileInput").click();
    };


    // Download canvas image as WebP
    const downloadImage = () => {
        const link = document.createElement("a");
        link.href = canvas.value.toDataURL("image/webp");
        link.download = "edited-photo-by-KrzychuK.webp";
        link.click();
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
      canvas,
      imgLoaded,
      triggerFileInput,
      loadImage,
      downloadImage,
    };
  },
};
</script>
  