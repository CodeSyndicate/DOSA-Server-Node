'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: ['gruntfile.js', 'server.js', 'app/**/*.js', 'server/**/*.js', 'test/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
            all: {
                src: ['gruntfile.js', 'server.js', 'lib/**/*.js', 'bin/**/*.js', 'test/**/*.js'],
                options: {
                    jshintrc: '.jshintrc'
                }
            }
        },
        vows: {
            all: {
                src: 'test/**/*.js',
                options: {
                    reporter: 'spec'
                }
            },
            allXunit: {
                src: 'test/**/*.js',
                dest: 'testResults.xml',
                options: {
                    reporter: 'Xunit'
                }
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    args: [],
                    watchedExtensions: ['js'],
                    nodeArgs: ['--debug'],
                    delayTime: 1,
                    env: {
                        PORT: 3000
                    }
                }
            }
        },
        env: {
            test: {
                NODE_ENV: 'test'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-vows-runner');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-env');

    grunt.option('force', true);

    grunt.registerTask('default', ['jshint', 'concurrent']);

    grunt.registerTask('test', ['env:test', 'vows', 'jshint']);

};