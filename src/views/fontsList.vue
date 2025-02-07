<template>
  <v-container>

    <v-row class="mb-4" justify="center">
      <v-col cols="12" md="8">
        <v-text-field
          v-model="userText"
          label="Type your text"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="font in fonts"
        :key="font.family"
        cols="12"
        sm="4"
        lg="3"
        class="d-flex justify-center mb-4"
      >
        <v-card
          :style="{ fontFamily: font.family, fontSize: '3em', textAlign: 'center', width: '200px' }"
          class="font-preview"
        >
          <v-card-text>
            {{ userText }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'GoogleFontsTool',
  setup() {
    const fonts = ref([]);
    const userText = ref('Example Text');

    // Pobranie czcionek z pliku JSON
    onMounted(async () => {
      try {
        const response = await fetch('/fonts.json'); // Pobranie pliku JSON z public/fonts.json
        fonts.value = await response.json();

        // Dynamiczne ładowanie czcionek do <head>
        fonts.value.forEach(font => loadFont(font.family));
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    });

    // Funkcja do dodawania linku do czcionek Google Fonts
    const loadFont = (fontFamily) => {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css?family=${fontFamily.replace(/ /g, '+')}&display=swap`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    };

    return {
      fonts,
      userText
    };
  }
};
</script>

<style scoped>

</style>
