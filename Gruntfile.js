module.exports = function(grunt) {
 
	require('load-grunt-tasks')(grunt);

 	grunt.initConfig({
        paths: {
            public: 'public'
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc' // relative to Gruntfile
            },
            files: [
              '<%= paths.public %>/**/{,*/}*.js',
              '!<%= paths.public %>/libraries/*',
              '!<%= paths.public %>/components/*'
            ]
        },

        clean: {
            src: [
                '<%= paths.public %>/main.js'
            ]
        },

        sass: {
            dist: {
                files: {
                    'main.css': 'main.scss'
                }
            }
        },

        concat: {
                js: {
                    src: [
                        '<%= paths.public %>/**/{,*/}*.js',
                        '!<%= paths.public %>/main.js',
                        '!<%= paths.public %>/libraries/*',
                        '!<%= paths.public %>/components/*'
                    ],
                    dest: '<%= paths.public %>/main.js'
                },
                css: {
                    src: [
                        '<%= paths.public %>/**/{,*/}*.css',
                        '!<%= paths.public %>/main.css',
                        '!<%= paths.public %>/components/*'
                    ],
                    dest: '<%= paths.public %>/main.css'
                }
            },

        connect: {
            options: {
                port: 3000,
                hostname: 'localhost',
                livereload: 12345
            },
            livereload: {
                options: {
                    open: {
                        target: 'http://localhost:3000',
                        appName: 'google-chrome'
                    },
                    base: [
                        '<%= paths.public %>'
                    ]
                }
            }
        },

        watch: {
            js: {
                files: [
                    '<%= paths.public %>/**/{,*/}*.js',
                    '!<%= paths.public %>/main.js',
                    '!<%= paths.public %>/libraries/*',
                    '!<%= paths.public %>/components/*'
                ],
                tasks: [
                    'jshint',
                    'clean',
                    'concat:js'
                    ]
            },
            css: {
                files: [
                    '<%= paths.public %>/**/{,*/}*.css',
                    '!<%= paths.public %>/main.css',
                    '!<%= paths.public %>/components/*'
                ],
                tasks: [
                    'concat:css'
                ]
            },
            all: {
                files: [
                    '<%= paths.public %>/**/{,*/}*.js',
                    '<%= paths.public %>/**/{,*/}*.html',
                    '<%= paths.public %>/**/{,*/}*.css'
                ],
                options: {
                    livereload: 12345
                }
          }
        },

        nodemon: {
            dev: {
                script: 'server/server.js'
            }
        },

        concurrent: {
            server: {
                options: {
                    logConcurrentOutput: true
                },
                tasks: [
                    'connect:livereload',
                    'nodemon',
                    'watch'
                ]
            }
        }
    });

    grunt.registerTask('hint', function () {
        var taskList = [
            'jshint'
        ];
        grunt.task.run(taskList);
    });

    grunt.registerTask('serve', function () {
        var taskList = [
            'clean',
            'concat',
            'concurrent'
        ];
        grunt.task.run(taskList);
    });
};