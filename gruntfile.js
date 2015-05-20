'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dev: {
                options: {
                    paths: ["dev/styles"],
                    sourceMap: true,
                    sourceMapFileInline: true,
                },
                src: 'dev/styles/style.less',
                dest: 'dev/styles/style.css'
            }
        },
        // autoprefixer: {
        //     dev: {
        //         options: {
        //             browsers: ['last 2 versions'],
        //             map: true,
        //         },
        //         src: 'css/final-unprefixed.css',
        //         dest: 'css/final.css'
        //     }
        // },
        watch: {
            less: {
                files: ['dev/styles/*.less'],
                tasks: ['less']
            },
            // autoprefixer: {
            //     files: ['css/final-unprefixed.css'],
            //     tasks: ['autoprefixer']
            // },
        },
        browserSync: {
            bsFiles: {
                src: [
                    'dev/**/*.*'
                ]
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./dev/"
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('dev', [
        'less',
        // 'autoprefixer',
        'browserSync',
        'watch',
    ]);

    grunt.registerTask('default', [
        'dev',
    ]);
};
