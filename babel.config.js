module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["styled-components", { "ssr": true }],
    ['module-resolver', {
      alias: {
        '@Events': './src/events',
        '@Pages': './src/pages',
        '@Assets': './src/assets',
        '@Styles': './src/styles',
        '@Components': './src/components',
        '@Themes': './src/themes',
        '@Hooks': './src/hooks',
        '@Style:Pages': './src/styles/pages',
        '@Style:Components': './src/styles/components',
        '@Hook:Themes': './src/hooks/themes',
        '@Hook:Components': './src/hooks/components'
      }
    }],
    "inline-react-svg"
  ]
};
