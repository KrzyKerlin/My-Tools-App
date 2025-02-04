import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', 
  },
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: false, 
        colors: {
          primary: '#2575fc', 
          secondary: '#6a11cb' 
        }
      }
    }
  }
})