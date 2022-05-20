let path = require('path');
const AngularCompilerPlugin = require('@ngtools/webpack/src');
//https://medium.com/deutsche-telekom-gurgaon/different-ways-to-remove-attributes-from-html-in-angular-8c9a34af00bb

module.exports = (config) => {

	// Raw Loader to load our html files
	// this didn't work for me, but I'm leaving it here for reference
	// config.module.rules.unshift(
	// 	{ test: /\.html$/, loader: 'raw-loader' }
	// );

	config.module.rules.push({
		test: /\.html$/,
		use: ['attribute-remover']
	})

	config.resolveLoader.alias = {
		'attribute-remover': path.join(__dirname, 'html-attribute-remover.js')
	}

	// Angular compiler plugin has this directTemplateLoading option which overrides our loader if we do not make it false
	// this step can be simplified
	const index = config.plugins.findIndex(p => {
		return p instanceof AngularCompilerPlugin.AngularWebpackPlugin;
	});

	try {
		// TODO: CLEAN UP
		const newConfig = { 
			...config,
			module: { ...config.module, rules: config.module.rules.filter(m => m.loader !== 'raw-loader'), },
			plugins: config.plugins.map(
				(plugin, i) => {
					if (index === i) {
						return new AngularCompilerPlugin.AngularWebpackPlugin({
							...plugin.pluginOptions,
							directTemplateLoading: false
						});
					}
					else return plugin;
				}
			)
		} 
		return newConfig;
	} catch (error) {
		console.log(error)
	}

}