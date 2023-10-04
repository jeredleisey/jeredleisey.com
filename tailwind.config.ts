import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        my: {
          patina: '#CDCDC3',
          bronze: '#CAA45D',
          gold: '#CC922F',
          slate: '#1E3957',
          royal: '#0A2749',
          midnight: '#0F1F2F',
        },
      },
      backgroundImage: {
        carina: "url('/carina_nircam.jpg')",
      },
      fontFamily: {
        inter: 'Inter',
        'kepler-std': 'kepler-std',
        'acumin-pro-condensed': 'acumin-pro-condensed',
        'hwt-aetna-streamer-outline': 'hwt-aetna-streamer-outline',
        'operetta-32': 'operetta-32',
        'acier-bat-gris': 'acier-bat-gris',
        'neue-montreal': 'Neue-Montreal',
      },
    },
  },
  plugins: [],
} satisfies Config;
