import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  darkMode: 'media',
  theme: {
    container: {
      center: true,
    },
    // colors: {
    //   blue: {
    //     900: '#0a2341',
    //   },
    //   orange: {
    //     100: '#EDE9E7',
    //     200: '#e6d4c8',
    //     700: '#c36446',
    //     800: '#aa5532',
    //     900: '#91432a',
    //   },
    //   gray: colors.gray,
    //   white: colors.white,
    // },
    fontSize: {
      '2xs': '0.625rem',
      xs: '0.75rem',
      sm: '1rem',
      base: '1.3125rem',
      lg: '1.5rem',
      xl: '1.875rem',
      '2xl': '2.5rem',
      '3xl': '3.5rem',
      '4xl': '5rem',
    },
    // fontFamily: {
    //   sans: ['Akzidenz-Grotesk Pro', 'sans-serif'],
    //   gothic: ['Engravers Gothic', 'sans-serif'],
    // },
  },
  plugins: [
  require('@tailwindcss/typography'),
  require('@tailwindcss/forms'),
  require('@formkit/themes/tailwindcss'),
  ],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
  './tailwind-theme.js',
  ],
}
