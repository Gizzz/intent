module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dev: {
                options: {
                    paths: ["css", "less"]
                },
                files: {
                    "css/final.css": "less/final.less"
                }
            }
        },
        watch: {
            files: ['less/*.less'],
            tasks: ['less']
        },
        browserSync: {
            bsFiles: {
                src: [
                    '*.html',
                    'css/*.css',
                ]
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./"
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', [
        'less',
        'browserSync',
        'watch',
    ]);
};
