import pkg from './package'
const companyLogo =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARUAAAA2CAYAAADpoQ3OAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMjQ3Q0JFRjQwQ0ExMUU2OUVCQUZBNjMzQkQxQTgyNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMjQ3Q0JGMDQwQ0ExMUU2OUVCQUZBNjMzQkQxQTgyNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIyNDdDQkVENDBDQTExRTY5RUJBRkE2MzNCRDFBODI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIyNDdDQkVFNDBDQTExRTY5RUJBRkE2MzNCRDFBODI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+l/WQcQAAEzJJREFUeNrsXQeYFEUabVwyLqgICHgnoICCAVBRknAgQYkCKyYUFAM65nCioHcmPANnGBUBFRThuD1RQIyIwCHinZ4oUSSsoEgQlbDkcP+becUWbXWamUW+pd73/cxOT3V1d9Vf7w9V1TjOgUROvItIecfCwqLI4rADfL1OIn+yzW5hYUklE15KSfm3tUgH2+wWFpZUMoFzRMomiCUnXsI2vYWFJZV00Z6f2SJNbdNbWFhSSSf0wXXaGQjGwsLCkkpKaCRSaT9SyYkXs81vYWFJJVW4k7NVRU6xzW9hYUklU6RiQyALC0sqKSInXlv+rRWSaCwsLCyppOSlACcJ4fzRdoGFhSWVqGif4m8WFhaWVH4T+lSRfxtaUrGwsKSSSS/Fb+r4LCGeI2w3WFhYUslE6ANkibS13WBhYUklTOiD5fjNQ5RsZ7vBwsKSShjgFQclQpXLiZeyXWFhYUklCOeFLIedyy1sV1hYWFLxC33gobSOcEZH2xUWFpZU/IBXG2RHKH+BEFE9IznlxE/1IK5GIsUNxw+33Wph8fuhmAxChClB743dKrIjoMxOlgMuF+kS8V7Wizws8ibraiVyj4OVt44zUuQ5Jze2Su63hvx9g8ilInNEHhGZJVI6QU44nhs733athcXvRyrV5PN5kcYHyT2BUPaImJK3Gz0IcBvLY03M90IqoZ/lk8PbYbf0mmabP1hr1eHQg/Q/9D+LX7c4yRxfQqdEJ9b5nAcvf6+U2Rui7r3Ua7xSdauc81PRDn9g/R2nh8jfOZgLtQ8Tg35/oMFHiXzA7yU0QpkvMkTzgBShbBZ5VGQxv5d2ChbZ/TviPd0h0scOr0MWxzjJSYUpInNFPhO5UCRoUWY/BNsh6u4r8h+RL0S6ixxZ9D2V/fMRTRJhRrIxCgMjGK5cJHK2CCzB60Jsi3j9pgxhypBk3pHfdnG5f2+ROiILRUbL8XXMqXRzktPXvyZCp9zY5xGs1FEMoXAfZ4oF2WPH2CHrsVwlHw/ya1vRhfkB5adDb6Rcz4ByDRJ67DivStm7D4W23D/RmRv7VAZqG/nrKadwVrqeyOuMZJ5EkRmStL/I8VnMj6jj5UTOTNyX4zzhIsAacjxP/voXJRV0YRvgpVGY1p4eUgFBuieIksyMqLh16DJ/a3CTa4hsZyj3W48yeY+fy7k/85xaJH91zuGaG79BJE/K5vvcC7y7RnTLt/B8GJnPvFx6OQf1Yy/XySIg+nIi+QxLf6DnuFzO3x7QDvAM5km5lSHaDAZonF+Y4RrAZenJKo93jpy7JUT3vCHyV7Z1Q3rJXtfB5AFe6XGC/F1F6l/jU6+aaHjJp74r4a1LPbsNvyGneLrICrbzzoDnQJ9URPvS0CK838V+MqEiyXGhlg7IdgryqBW0sj+xf3eGJ5XkgP9FBmwfum33O+EWsIUFVth+JPU/RfKoSK/lssTAyIkPl89JVHKQW3+RY+X4++yUJSL1Ra4WWS1yS5r3g7DvG5G6vI/pIc+D0j0oHXC2NPCuCNcbIAKC/NZ1fDuVeQQHK0LElQzrIDX52UA7Zys7fwxj9S/YPuhTeJxV5P6myedDco/fGO5lN0NP5NOqcxDdaRq8JKDrGSb+KDJbZC09vHIkGSTPj2L53lLPRz7t8GeRGSL3hWizx/DcUueAEMSyjd7sEN5b/xCDMAGp+1e5Brxc5OPOTHjD3uipefowTMN9ysKLXuQ2JFrbViaZIQ3xnqFIZ+r5Wg7yHXzOP7D/V9GIZFMPKtK4gKimUbfuZWSAcgtYDtFANYZ5/RgBqNTCWSIP8PtUXhv9jP8Ro5Tc8wREHF45p+LGZsiNofNelsGM+HKoyPEZJBYMkKcNx2Epb6W40d757T6if6bp7h7HQYp6P0RcLcfKS0NtDHF6VXYISGlcBC8F18ozKDRmvmZKGQzWrrTMT2rnop9e1pPJ8jcG94/y21InOUM2WI7N0srfKXIjBoh8b+v2CmhtPpXfPmOsP1WOzTHcN551LEmvr5T5wuP5SlA5B2k5MFO5Rhz4IL2Hg7wa6ihmEzc5ydlBP2JAGL1I6sVzL5XvsyOqxRSSyjk+969C7o9o+Lp6kYqULUlD+nwAQWXRsJpIBe8cairPkueq+xXq0+Py2zjtOAb/bTAachzk84Uce4+kMluO9XXVczeJSbXhctatSOV6NSZY9zMivWBY4XHKb1tNbrU3cmOwXh3CDpwQ+JwWxI2xHl7CtwzF3NZmi5bYTcdLgau/gF5TSSpLGFTj581UsjC4mZ/Vfcps9xgsu9iZJuz1KP8oE4TlSS5eUJ7WDsOgOJzkjTDiAi9CUSQl8gJ1ZZPP9XrxswKtcFjcQLIIg+20uFGhvCsQXm2PMq04bm5j2zWSsl4vGzuLFv5dn2terDwaqedYw+8vugklgFjz6dXn+emIBqQOlrrq2O1T940Mg+owoe1EI5UkseSL3Er3d3OaA3kOcxeD6VaNSyhWbux2+byEIddEeg53iZwrv8H9bcmGAvG8kLAQubF30ryX7kygOQy5HIZAYaCIoQbJKchLqeEUrNuplsrNSod6JaD3eJTfyzyBHtdHxQB6qffSmwqD6RpRmcKobgxpHFrnMHhL3Y/U0SdE+Q1e9xDQxguZG3Ic760j8Czeous/XcvNmdCWHtMij/ZArqQyPZliHAPue5qbwnOscoVbW33KLhHZFKHuLdq4OSV8+GMml7ckHJrDBmiQopLWSjxgbuxZ+XxWS7rWTCShcmPInbyvHceK2gpMyA7KVPzFhF4tzd0EkT3E2L2ONNziEKSykGEHvJU3AnIr/amArQM8lVTgpxDfabmGqG1UmYN+hTzb1AinfkxP0oSOTDai77F4sXHI9h7NROVNiOXlnI1yznincIAQ6AqGQC+72qQ8Qw7l0U5gCITvcUNdbTSD5eWlwON+jUb7YrnGkIh5ujDYmcI5+fSy/PRqe2qeyv7EkscY8vkUH651YiDnxDslyCInXktkAN3O6fL3dSJVE1PIOfEe7OD6haA48FIwK7BKJemcgvUtYbyVqlSEPHorXX0GZxXW+Td6epUihEzpoqS6jQDlMQFhbwkmgKNYyQ0+swO9aOXhXo+P4q3IOY+yzYFnpA0L65UZKgRqYuinjiTZr/j9XQ6selL2BIN3WlOz6m69KEMPZ7zU9x1TA1US3vnBgd2p6lX0vT+5sZ0iD9FVS2VlIKz7MFr6mYzR4BZj5uA+KvGXtGa1M91SnBbtZujsN1WuxW/QcyUlOn+NRq438bgJ1+I0urFr2ebHRLzn4ki2pvC4p9FrGJ2C8jR2WaV02x2zFc1o3R2nINGeI78FvfpCWcx76FWiDYfLeV7v69mYxq3OJFFkGzzynnp+kTmGKfza1RD6rJQyX3tcpxNDtJmu9rjsQDKHtGHrEO1v0qvlTFNkgFQKyGUaWXVGhLO8ErWjHXOidrE7iZQBwK09Gh0ujVlfiZPMgCMPUcnx32FdiWHjOirYGpJfZ0OHYfUkZi5UknWN5un44UY5d5ES+b7MSU6jR1GWilTQ2zlTFBWV+bkjQ+2OpN4yuZd5HJBLmWMLk7DN0hKIMELT6EWN4mxSxsAZE+W1tnSR4pmah+XO93QzkIpf3g9e2yTNq5vIMMUrYZsJnKvrlQg87eFR+ljOwfIBLFK91ssjTW+Xcm5sLePCBSHP8ErU3uXsn6id7CSnRNvJb2sy3LA9aMkw2B/Q5HZt0PfyOV91+Ho26jB+v83grWCtwDxtalMRalCydig9hSZUziu1BKIXBsn1ITFOE0Khh8u1J6Tp/man2+Bsl17aANynQSGtc3Ft0KPNr6JHixDidS4QK4wQqJUrZJ4l119tKIu81vE0Tir3ginctz3a4zgOzInac21kPtGYsM0QplKvGtMhABH+N2D9z1CsERLB7Ntf2GfXKOPg21lpAJamTsiy0RK1mXf1yjFX8JQ0StzwOwbwKDJ6RY8Zj2ougniVCUTlrUzQrgXlv0E7V5FWULJ2p7Ze5hd6VUELv6bTJQVgTWBZ4doOSzHxp9bE1MtA0zclGbeipVNQe7mCErblXN7EVil/KUNWEMoY+X6BNvW6Ic37/ZCGr6G2dgn7fIaYPBsp8wGNFQbpfJLReobxXl4bcI2c2087XoOfhZWw3aPpFT6/l+sMDzjnXc2T6cDx3t4vQsnE+1TOi0BOpkTtQDIoErX9E7umk4nanoXwpn00RlkvC0K3+ie61t19krQ7pHM2a3H1CP6GmSC1nwqe0Pfy+8eGgRp5WjlghSowA4uguBAKJDeXg3lgim31mSIEWt50cDFzaIPpbit5km0eOZfAwYHBuYg5rjHcPpGJEGgV7xfjo4XU25DhoNd6E5WP68L+T4Q+pr1kmtcGi/+iqz0G0vBESdiWT/NZg/RqgqZX/UiWfeU5ehY2qaSTqMVUWikmagcx7/Il8xCZzvDDmsz1WkxE11rFzBf5kIo7QT2cHgX2NrXnSkokaJ/2sP7VnEKEPAcsyzW0RrCGfov6sn1CgF0k2P5peIdQerzfZjRW/LqFAythvTkjYkJZj+dcz37Ko5UHsWTKEE3RQiAMoMmm1aMEcjC/0js8g8bTi4Cas/+HGtoDsyljWa6Pc5CBe5xizD0+rsK9zJJKTry8nswqBGTsNZPSAEczSTspKFOkyI+bq9yorpGDbjVf4NfbaZk3GBRrXchEbRQc5qEAmLVRWx6G+CQ0i/ko0Kv82t+jLYwkInKWdqgbE60TfAbkClrcLlHDdG5d6EFiAam/7qSw8M2HVLB3p6umF17GSOkV9svBQ/nUx2tboDbwGTCWg7YFcy+/F7z0ajqNJRyBUVwykVFPpZ2T2Q2HbrQicWUC3anckwPYGDHxAi3Rasqp/Gw4/go9mPr0uJ4zuL9rAjyV0gEDtoWP+5tleJZ3mbtCvSM5g+GG6j/Tazgfdgo2oI0NSSwdXHVhEH2sdlcb7hFtNIZfr/Cos1RAn/3I5CaSqA2d8Cuj/fA/eh/oqy0+JLEvTOAnyPtDjx3H5enZj/d5lpUkWpB9b5/rlYkwhj11hPfV3PW9mNaHpnOeZMoCbfOalC+bSVLpUMhsWYKWIl0vpQRzHFi+vDzEKcoqdTfsAanBuNKtDPlOQfL5Zw/FUZ5KJa5YdUNtMz/OQyFNcfaRAbH1Y1QAeGqjDXmHbK8Qg+4+8hafMDydJOcP5FS5qZ2RiMdM3jx+xwDHmoagLRX/oHeBFc2ttPoUmRwVwjXPo+FYnYmwnqSgVhLnhtghPVszGl7e8GUk6LcD6lKL/C7n0gATykXIqSi9qqnl/FQbgzQucJU/wnCuu22QtsBSByTeh+mha7E0Qp9yVJ7C/j978KKmfmmQSXWGATns9E4kF7/XAMIiq1kokBDeDvcN4+WRTnJqHHmGFXo93NuCPBFml0Yb6sVgnL/vuSQudZKLy7aTrCZpAwgJTCQMtzFJiGnAkVLvU5oyNNAUGNOTj/DZdrmuW4Yuaye2wQMcBKWZZET9WDeCtTDLmJNxJxcvYTyNzXO7mchdQu8MA6Uu8w+wtG3oseFtgrXZ/r5bGeQaE9m+uL9bmIBtxTrymCRcxnUkfn3+R4YQSFwPSNMYdWLOp1mYTX1S/n4O0NN1T4UGoTn7AOOmqV99tPwLaVSxKRSvLliMMIukUJv6g3KYWsfmxu/c/ca6KjE0b8pDX7FtN9EgQYfw7p3eLF+SOST1/iLMeEGX17jHDHewv8Q65lP/vk5nSrlNREKB1buPitMr0nVy4mWEWLamcI+w+Kczt6HyG2jcDxz/acdNWuhThgOpLj0QdbwxB1S+xuCYXryQOQKvNuhGxULb1ePfirDucFmi4lpYNMPZf2c2PI+arhDtbHoVPxg8jmvoSZxI76Q1XVv9bWT1eV9fGUIUeDmv8/wz2LawYseSFL+lok91Cqa0B2teUFUSjmkQZdHLyyJBwZs6iaSqnq8u2+PrAA9jhdTX2cnMVDieJR5hlzCWIyw3hD7N+GxqlzVeR7HahyDR39dq+ncy8zQLSQSnkeAVTiUBmdaLYa0T9jCN0ELJ0lqu6nMSl0It6umVWjRzDtMG+e6wk8TbkKEQjFPLdDyVoU74N+YvTjRSbuwbntuLrFYm5PlXy7mTHQsLi4MeqcWeOfHSTvh5dOxpOH8foSQi1Ng4JznNuDhkHZ1tV1lYFGVSSca6ZQPKbE/E0rmxW0R+uxU+STLnO+He4HauEFlJ210WFkWXVILWjyyld+L/xjiQDUgnmcjzy5mAwFra7rKwKIqkkvQY/Fa6Yiq1g5DFwtB1FoRDS3xKdbHdZWFRND0VTI1le4Q7dwhBxBKvoIyKZDjktzCoLf/jdwsLiyJGKp18wp0xad1N8n24MSc5tep+VZ2a67ewsCgypJL8HwHPSzvcCSaXMQyH3C9osrNAFhZFzFPB4qoKGQl3golloZPcBjDeFQJl2W6zsCg6pKI8hbxEGJRuuBMtHMISZOyDaGK7zcKiKJBKTvwwhj7Yo9GO/9HYgUGSvDruIzMLC4si4algf8ETMsCvE9l8wO80SWKYyt5GgrOwsDgI8X8BBgAB8sDK+xNzUwAAAABJRU5ErkJggg=='

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Comstice Quartz - UCCE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  toast: {
    duration: 2000
  },
  env: {
    javaURL: '//10.1.72.36:8080/',
    name: 'American Water',
    companyLogo,
    loginBgColor: '#F9FAFA',
    loginTextColor: '#003d60',
    bgDark: false
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/scss/app.scss', '@/assets/scss/icons.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/veeValidate.js' },
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/momentDuration.js' },
    { src: '~/plugins/momentRange.js' },
    { src: '~/plugins/excelExport.js' },
    { src: '~/plugins/datepicker.js' }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/moment',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: '//172.16.8.7:3100/'
    // baseURL: 'https://entplcwsx002.amwater.net:2778'
  },

  /*
   ** Build configuration
   */
  build: {
    // analyze: true,

    /*
     ** You can extend webpack config here
     */

    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
