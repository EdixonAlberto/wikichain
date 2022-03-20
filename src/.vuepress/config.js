module.exports = {
  title: 'Wikichain',
  lang: 'es-VE',
  description: 'Enciclopedia sobre mundo de las criptomonedas y el blockchain',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }]
    // ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    search: true,
    // logo: '/img/image.png',
    nav: [{ text: 'GitHub', link: 'https://github.com/EdixonAlberto/wikichain' }],
    sidebar: [
      {
        title: 'Inicio',
        collapsable: false,
        path: '/',
        children: ['/smart-contracts', '/halving', '/testnet']
      },
      {
        title: 'Criptomonedas',
        collapsable: false,
        path: '/criptomonedas/',

        children: ['/criptomonedas/dai', '/criptomonedas/bnb', '/criptomonedas/twt', '/criptomonedas/upco2']
      }
    ],
    activeHeaderLinks: false,
    sidebarDepth: 0
  },
  markdown: {
    anchor: {
      permalink: false
    }
  },
  repo: 'https://github.com/EdixonAlberto/wikichain',
  docsBranch: 'main',
  docsDir: 'src'
}
