const CracoAlias = require('craco-alias');
const emotionPresetOptions = {};
const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
    undefined,
    emotionPresetOptions
);

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: '.',
                tsConfigPath: 'tsconfig.paths.json',
                debug: false,
            },
        },
    ],
    babel: {
        plugins: [...emotionBabelPreset.plugins],
    },
};
