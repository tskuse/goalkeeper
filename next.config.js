const withManifest = require('next-manifest');

module.exports = withManifest({
    manifest: {
        output: './public/',
        name: "Goalkeeper",
        short_name: "Goalkeeper",
        display: "fullscreen",
        orientation: "landscape",
        scope: "/",
        start_url: "/"
    }
});