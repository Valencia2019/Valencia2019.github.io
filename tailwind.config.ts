 const config = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          accent: '#8B5CF6',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          mono: ['Fira Code', 'monospace'],
        },
      },
    },
    plugins: [],
}

export default config