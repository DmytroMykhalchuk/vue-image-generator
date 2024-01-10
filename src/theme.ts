import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css';

export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'lightTheme',
        themes: {
            lightTheme: {
                dark: false,
                colors: {
                    primary: "#ad1c3d",
                    "page-header-background": "#d7d7ce",
                    "page-background": "#cdcdc1",
                    "table-header": "#cdcdc1",
                    background: "#fff",
                    "header-background": "#b5b5a6",
                    "info-text": "#666660",
                    paper: '#fff,'
                },
            },
            darkTheme: {
                dark: true,
                colors: {
                    primary: "#52E3C2",
                    "page-header-background": "#282831",
                    "page-background": "#32323E",
                    "table-header": "#2e2e2e",
                    background: "#353535",
                    "header-background": "#4a4a59",
                    "info-text": "#99999F",
                    paper: '#4C4C4C',
                },
            },
        },
    },

})
