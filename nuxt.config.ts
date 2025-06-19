// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint"],
	devtools: { enabled: false },
	compatibilityDate: "2025-05-15",
	runtimeConfig: {
		public: {
			apiBase: 'http://127.0.0.1:8000/api'
		}
	},
  css:[
    'bootstrap/dist/css/bootstrap.min.css',
  ],
  plugins: [
    '~/plugins/bootstrap.client.ts'
  ],
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
})