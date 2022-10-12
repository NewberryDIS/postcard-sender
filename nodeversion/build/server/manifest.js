const manifest = {
	appDir: "_app",
	assets: new Set(["FlechaM-Medium.woff","StyreneB-Bold-Web.woff","StyreneB-Medium-Web.woff","favicon.png","favicon.svg","signifier-regular.woff2"]),
	mimeTypes: {".woff":"font/woff",".png":"image/png",".svg":"image/svg+xml",".woff2":"font/woff2"},
	_: {
		entry: {"file":"_app/immutable/start-e67ae831.js","imports":["_app/immutable/start-e67ae831.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-14b98cea.js","_app/immutable/chunks/singletons-c097a570.js","_app/immutable/chunks/index-5459d33d.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-7b6cb671.js'),
			() => import('./chunks/1-da41f657.js'),
			() => import('./chunks/2-6ea9e594.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
