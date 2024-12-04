/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--base-background-color)",
        foreground: "var(--base-foreground-color)",
      },
      textColor : {
        "base" : 'var(--base-foreground-color)',
        "muted" : 'var(--muted-foreground-color)',
        "base-title" : 'var(--base-title-color)',
        "muted-title" : 'var(--muted-title-color)',
        "base-paragraph" : 'var(--base-paragraph-color)',
        "mute-paragraph" : 'var(--mute-paragraph-color)',
        "base-button" : 'var(--base-button-text-color)',
        "base-button-hover" : 'var(--base-button-text-hover-color)',
        "base-input" : 'var(--base-input-text-color)',
        "base-inpu-active" : 'var(--base-input-text-active-color)',
        "tag" : 'var(--tag-text-color )',
        "tag-hover" : 'var(--tag-hover-text-color)',
      },
      backgroundColor : {
        "base" : 'var(base-background-color)',
        "mute" : 'var(--muted-background-color)',
        "base-button" : 'var(--base-button-background-color)',
        "base-button-hover" : 'var(--base-button-background-hover-color)',
        "base-input" : 'var(--base-input-background-color)',
        "base-input-active" : 'var(--base-input-background-active-color)',
        "tag-color" : 'var(--tag-background-color)',
        "tag-hover" : 'var(--tag-hover-background-color)',
        "card" : 'var(--card-background-color)'
      },
      borderColor : {
        "button" : 'var(--base-button-border-color)',
        "button-hover" : 'var(--base-button-border-hover-color)',
        "input" : 'var(--base-input-border-color)',
        "input-active" : 'var(--base-input-border-active-color)',
        "tag" : 'var(--tag-border-color)',
        "tag-hover" : 'var(--tag-hover-border-color)'
      }
    },
  },
  plugins: [],
};
