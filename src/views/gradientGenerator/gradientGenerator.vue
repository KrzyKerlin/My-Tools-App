<template>
  <div class="gradient-container">
    <div class="preview">
      <!-- text with gradient -->
      <p ref="gradientText" class="gradient-text">GRADIENT</p>
    </div>
    <div class="controls">
      <div class="control-group">
        <label for="color1"></label>
        <input type="color" id="color1" v-model="color1" />
        <label for="color2"></label>
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
      <!-- generated CSS code -->
      <pre id="cssCode">{{ cssCode }}</pre>
      <button id="copyCode" @click="copyToClipboard">
        <i class="fas fa-copy"></i> Copy Code
      </button>
    </div>
  </div>
</template>

<script>
import { useGradientLogic } from './script.js';

export default {
  setup() {
    const { color1, color2, gradientText, direction, directions, setDirection, cssCode, copyToClipboard } = useGradientLogic();
    return { color1, color2, gradientText, direction, directions, setDirection, cssCode, copyToClipboard };
  },
};
</script>
  
<style scoped>
  @import "./style.css"
</style>
  