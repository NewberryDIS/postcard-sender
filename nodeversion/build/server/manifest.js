const manifest = {
	appDir: "_app",
	assets: new Set(["FlechaM-Medium.woff","StyreneB-Bold-Web.woff","StyreneB-Medium-Web.woff","favicon.png","favicon.svg","signifier-regular.woff2"]),
	mimeTypes: {".woff":"font/woff",".png":"image/png",".svg":"image/svg+xml",".woff2":"font/woff2"},
	_: {
		entry: {"file":"_app/immutable/start-d19e202d.js","imports":["_app/immutable/start-d19e202d.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/index-fb1845d1.js","_app/immutable/chunks/singletons-a037fc50.js","_app/immutable/chunks/index-7c888c3e.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-3dba1500.js'),
			() => import('./chunks/1-a1821b41.js'),
			() => import('./chunks/2-61c87256.js')
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
