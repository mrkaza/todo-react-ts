/* eslint @typescript-eslint/no-var-requires: "off" */
module.exports = (config) => {
    require('react-app-rewire-postcss')(config, {
        plugins: (loader) => [
            require('postcss-preset-env')(),
            require('postcss-nested')(),
            require('postcss')(),
        ],
    });

    return config;
};
