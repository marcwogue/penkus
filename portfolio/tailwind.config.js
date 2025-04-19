/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'aqua',
      'light',
       'dark',
        'cupcake', 
        'bumblebee', 
        'retro', 
        'cyber', 
        'valentine', 
        'halloween', 
        'garden', 
        'forest', 
        'aqua', 
        'synthwave',
        'synthwave-01',
        'pastel', 
        'fantasy', 
        'expression', 
        'neon', 
        'duotone', 
        'dracula'
      ],
  },
}

