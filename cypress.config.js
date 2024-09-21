const webpack = require('@cypress/webpack-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = {
  e2e: {
    async setupNodeEvents(on, config) {
      // Adiciona o plugin do Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Configuração do Webpack
      const options = {
        webpackOptions: {
          resolve: {
            extensions: ['.ts', '.js', '.json'],
          },
          module: {
            rules: [
              {
                // Processa arquivos .feature
                test: /\.feature$/,
                use: [
                  {
                    loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                    options: config,
                  },
                ],
              },
            ],
          },
        },
      };

      on('file:preprocessor', webpack(options));

      return config;
    },
    specPattern: 'cypress/e2e/features/*.feature',
    supportFile: 'cypress/support/index.js',
  },
};