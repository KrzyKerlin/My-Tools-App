<template>
    <div class="palette-container">
      <h1 class="mb-4">Color Palette Generator</h1>
  
      <v-btn @click="generatePalette" color="primary" size="x-large" class="mb-6">
        Generate Palette
      </v-btn>
  
      <div id="result">
        <div v-if="palette.length" class="palette">
          <div 
            v-for="(color, i) in palette" 
            :key="i" 
            class="color-box" 
            :style="{ backgroundColor: color }">
            {{ color }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'ColorPalette',
    setup() {
      const palette = ref([]);
  
      // Generates a random hex color
      const getRandomColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
      };
  
      // Generates a single palette with 5 colors
      const generatePalette = () => {
        palette.value = []; // Clear previous palette
  
        for (let i = 0; i < 5; i++) {
          palette.value.push(getRandomColor());
        }
      };
  
      return {
        palette,
        generatePalette
      };
    }
  };
  </script>
  
  <style scoped>
  .palette-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
  
  #result {
    margin-top: 20px;
    width: 100%;
    text-align: center;
  }
  
  .palette {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
  }
  
  .color-box {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  </style>
  