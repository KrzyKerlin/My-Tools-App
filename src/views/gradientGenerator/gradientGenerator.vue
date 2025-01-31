<template>
  <div class="gradient-container">
    <div class="preview">
      <!-- Tekst z gradientem -->
      <p class="gradient-text">GRADIENT TEXT</p>
    </div>
    <div class="controls">
      <div class="control-group">
        <label for="color1">1:</label>
        <input type="color" id="color1" v-model="color1" />
        <label for="color2">2:</label>
        <input type="color" id="color2" v-model="color2" />
      </div>
      <div class="control-group directions">
        <button
          v-for="dir in directions"
          :key="dir.value"
          :class="{ active: direction === dir.value }"
          class="direction-btn"
          @click="setDirection(dir.value)"
        >
          {{ dir.icon }}
        </button>
      </div>
    </div>
    <div class="gradient-code">
      <!-- Podgląd wygenerowanego kodu CSS -->
      <pre id="cssCode">{{ cssCode }}</pre>
      <button id="copyCode" @click="copyToClipboard">
        <i class="fas fa-copy"></i> Copy Code
      </button>
    </div>
  </div>
</template>

  
<script src="./script.js"></script>
  
<style scoped>
  @import "./style.css"
</style>
  