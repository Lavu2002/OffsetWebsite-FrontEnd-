require('dotenv').config()
// console.log("-----ENVIRONMENT------",process.env)
export default ({
    runtimeConfig: {
        // The private keys which are only available within server-side
        // apiSecret: "123",
        // Keys within public, will be also exposed to the client-side
        public: {
            API_URL: "https://xhunaihl0f.execute-api.ap-south-1.amazonaws.com/dev/v1/",
            
        }
      },
    
    server: {
		https: true
	},
    css: ['@/assets/css/global.css'],
    nitro: {
        preset: 'node-server'
    },
    ssr: true,
    modules: ['nuxt-schema-org', 'nuxt-swiper','nuxt-simple-sitemap'],
//     router: {
//         extendRoutes(routes, resolve) {
// 			routes.push({
// 				name: 'blog-post',
// 				path: '/blog/:_id/:titleUrl',
// 				component: resolve(__dirname, 'pages/blog/[titleUrl].vue')
// 			}),
//             routes.push({
//                 name: 'edit-blog',
//                 path: '/dashboard/blog/edit-blog/:titleUrl',
//                 component: resolve(__dirname, 'pages/dashboard/blog/edit-blog/[titleUrl].vue')
//             })
//     }
// },
    sitemap: {
		hostname: 'https://poc.offsetfarm.io/',
		gzip: true,
		exclude: ['/dashboard/**', '/auth/**', ]
	},
    publicRuntimeConfig: {
        API_URL: process.env.API_URL
    },
})