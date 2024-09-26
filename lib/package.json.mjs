var name = "@pixi/react";
var version = "0.0.0-development";
var description = "Write PixiJS applications using React declarative style.";
var keywords = [
	"react",
	"pixi"
];
var homepage = "https://github.com/pixijs/pixi-react#readme";
var bugs = {
	url: "https://github.com/pixijs/pixi-react/issues"
};
var repository = {
	type: "git",
	url: "git+https://github.com/pixijs/pixi-react.git"
};
var license = "MIT";
var exports = {
	".": {
		"import": {
			types: "./types/index.d.ts",
			"default": "./lib/index.mjs"
		},
		require: {
			types: "./types/index.d.ts",
			"default": "./lib/index.js"
		}
	}
};
var main = "lib/index.js";
var module = "lib/index.mjs";
var types = "types/index.d.ts";
var files = [
	"lib",
	"dist",
	"types"
];
var scripts = {
	build: "rimraf dist lib types && npm run lint:fix && rollup -c && tsc",
	clean: "xs clean",
	docs: "xs docs",
	lint: "xs lint",
	"lint:fix": "xs lint --fix",
	prepare: "husky install",
	prerelease: "npm run test:lint && npm run build",
	release: "xs bump,publish,git-push",
	test: "tsc --project tsconfig.test.json && vitest run",
	"test:e2e": "tsc --project tsconfig.test.json && vitest run e2e",
	"test:unit": "tsc --project tsconfig.test.json && vitest run unit",
	"test:lint": "xs lint",
	"test:watch": "vitest",
	watch: "rollup -w -c"
};
var husky = {
	hooks: {
		"pre-commit": "lint-staged"
	}
};
var dependencies = {
	"react-reconciler": "0.29.2"
};
var devDependencies = {
	"@pixi/extension-scripts": "^2.4.1",
	"@rollup/plugin-commonjs": "^25.0.8",
	"@rollup/plugin-json": "^6.1.0",
	"@rollup/plugin-node-resolve": "^15.2.3",
	"@testing-library/jest-dom": "^6.4.8",
	"@testing-library/react": "^16.0.0",
	"@testing-library/user-event": "^14.5.2",
	"@types/eslint": "^8.56.10",
	"@types/react": "^18.3.2",
	"@types/react-reconciler": "0.28.8",
	"@vitejs/plugin-react": "^4.3.1",
	"@vitest/browser": "^2.0.4",
	canvas: "^2.11.2",
	husky: "^8.0.0",
	jsdom: "^25.0.0",
	"pixi.js": "8.2.6",
	playwright: "^1.45.3",
	react: "^18.3.1",
	"react-dom": "^18.3.1",
	rollup: "^4.18.0",
	"rollup-plugin-esbuild": "^6.1.1",
	"rollup-plugin-sourcemaps": "^0.6.3",
	typescript: "^5.4.5",
	vitest: "^2.0.0"
};
var peerDependencies = {
	"pixi.js": "^8.2.6",
	react: ">=18.0.0",
	"react-dom": ">=18.0.0"
};
var peerDependenciesMeta = {
	"react-dom": {
		optional: true
	}
};
var overrides = {
	rollup: "^4.18.0"
};
var publishConfig = {
	access: "public"
};
var extensionConfig = {
	lint: [
		"test",
		"lib"
	],
	environments: [
		"node"
	],
	docsName: "PixiJS React",
	docsTitle: "PixiJS React API Documentation",
	docsDescription: "Documentation for PixiJS React library",
	docsKeyword: "docs, documentation, pixi, pixijs, react, html5, javascript, jsdoc"
};
var packageData = {
	name: name,
	version: version,
	description: description,
	keywords: keywords,
	homepage: homepage,
	bugs: bugs,
	repository: repository,
	license: license,
	exports: exports,
	main: main,
	module: module,
	types: types,
	files: files,
	scripts: scripts,
	husky: husky,
	"lint-staged": {
	"*.{ts,js,mjs}": [
		"eslint --cache --fix --max-warnings 0"
	]
},
	dependencies: dependencies,
	devDependencies: devDependencies,
	peerDependencies: peerDependencies,
	peerDependenciesMeta: peerDependenciesMeta,
	overrides: overrides,
	publishConfig: publishConfig,
	extensionConfig: extensionConfig
};

export { bugs, packageData as default, dependencies, description, devDependencies, exports, extensionConfig, files, homepage, husky, keywords, license, main, module, name, overrides, peerDependencies, peerDependenciesMeta, publishConfig, repository, scripts, types, version };
//# sourceMappingURL=package.json.mjs.map
