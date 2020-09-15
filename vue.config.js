module.exports = {
  pages: {
    'index': {
      entry: './src/main.js',
      template: 'public/index.html',
      title: 'App',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'auth_proxy': {
      entry: './src/pages/auth_proxy/main.js',
      template: 'auth_proxy.html',
      title: 'auth_proxy',
      chunks: [ 'chunk-vendors', 'chunk-common', 'auth_proxy' ]
    }
  },

  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  },

  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    'resolve-alias': {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },

  publicPath: process.env.NODE_ENV === 'production'
      ? '/sbutify/dist/'
      : '/'
}
