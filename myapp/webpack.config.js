const TerserPlugin = require('terser-webpack-plugin'); // Importa o plugin Terser para minificação

module.exports = {
  mode: 'production', // Define o modo de compilação como produção (otimizações ativadas automaticamente)
  optimization: {
    minimize: true, // Habilita a minificação de arquivos (ativada automaticamente no modo produção)
    minimizer: [
      new TerserPlugin({ // Configura o TerserPlugin para personalizar a minificação
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.log, console.debug, etc.
          },
        },
      }),
    ],
  },
};
