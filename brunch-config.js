exports.config = {
    paths    : {
        watched: ['app', 'test']
    },
    files: {
        javascripts: {
            joinTo: {
                'javascripts/app.js': /^app/,
                'javascripts/vendor.js': /^(?!app)/,
                'test.js': /^test/
            }
        },
        stylesheets: {
            joinTo: 'stylesheets/style.css'

        }
    },
    plugins:{
        babel:{presets:['es2015','react']}
    },
    server: {
        port: 5555
    }
};