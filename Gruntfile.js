module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webfont: {
            icons: {
                src: 'font-icons/src/*.svg',
                dest: 'font-icons/',
                options: {
                    font: 'ficon',
                    stylesheet: 'scss',
                    engine: 'node',
                    relativeFontPath: '../font-icons/',
                    templateOptions: {
                        baseClass: 'ficon',
                        classPrefix: 'ficon-',
                        mixinPrefix: 'ficon-'
                    }
                }
            }
        },
        sass: {
            dist: {
                options: {
                    cacheLocation: 'cache/sass'
                },
                files: {
                    'css/main.css' : 'sass/main.scss'
                }
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: 'hbs',
                    /* Exclude path then setting template name */
                    processName: function (filePath) {
                        return filePath.split('/').pop().split('.')[0];
                    }
                },
                files: {
                    'js/hbs.js': 'hbs/*.hbs',
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            webfont: {
                files: 'font-icons/src/*.svg',
                tasks: ['webfont', 'sass']
            },
            css: {
                files: 'sass/**/*.scss',
                tasks: ['sass']
            },
            handlebars: {
                files: 'hbs/*.hbs',
                tasks: ['handlebars']
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['webfont', 'sass', 'handlebars', 'watch']);
};