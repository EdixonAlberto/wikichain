const folders = {
  cryptos: 'criptomonedas'
}

module.exports = {
  title: 'Wikichain',
  lang: 'es-VE',
  description: 'Enciclopedia de Blockchain',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }]
    // ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    search: true,
    // logo: '/img/image.png',
    nav: [{ text: 'Acerca', link: '/aboutme' }],
    sidebar: [
      {
        title: 'Inicio',
        collapsable: false,
        children: [
          '/',
          '/blockchain',
          '/smart-contracts',
          '/halving',
          '/testnet'
          // '/makerDao',
          // '/ethereum',
          // '/ether'
        ]
      },
      {
        title: 'Criptomonedas',
        collapsable: true,
        children: [`/${folders.cryptos}/dai`, `/${folders.cryptos}/bnb`, `/${folders.cryptos}/twt`]
      }
    ],
    activeHeaderLinks: false,
    sidebarDepth: 0
  },
  markdown: {
    anchor: {
      permalink: false
    }
  }
}
