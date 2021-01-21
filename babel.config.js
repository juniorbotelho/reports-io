module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["@babel/plugin-proposal-decorators", {
      "legacy": true
    }],
    ["styled-components", {
      "ssr": true
    }],
    ['module-resolver', {
      alias: {
        '@Api': './src/api',
        '@Events': './src/events',
        '@Pages': './src/pages',
        '@Assets': './src/assets',
        '@Styles': './src/styles',
        '@Components': './src/components',
        '@Themes': './src/themes',
        '@Hooks': './src/hooks',
        '@Providers': './providers',
        '@Style:Pages': './src/styles/pages',
        '@Style:Components': './src/styles/components',
        '@Hook:Themes': './src/hooks/themes',
        '@Hook:Components': './src/hooks/components',
        '@App:Api': './app/api',
        '@App:Controllers': './app/controllers',
        '@App:Models': './app/models',
        '@Provider:Errors': './providers/errors',
        '@Provider:Middlwares': './providers/middlewares',
        '@Provider:Functions': './providers/functions',
        '@Server:Config': './server/config',
        '@Server:Routes': './server/routes',
        '@Server:Services': './server/services'
      }
    }],
    "inline-react-svg"
  ]
};
