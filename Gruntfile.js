module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/js/*.js']
        },
        uglify: {
            my_target: {
                files: {
                  'build/script.min.js': ['src/js/*.js']
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'build/style.css': 'src/css/*.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'build/style.min.css': ['build/style.css']
                }
            }
        },
        // Настройка наблюдения за изменяемыми файлами
        watch: {        
            js: {
                options: { 
                    livereload: true 
                },
                files: ['src/js/*.js'],
                tasks: ['jshint', 'uglify']
            },
            css: {
                options: { 
                    livereload: true 
                },
                files: 'src/css/*.scss',
                tasks: ['sass', 'cssmin']
            },
            all: {
                files: ['**/*.html'],
                options: {
                    livereload: true
                }
              }
        }
    }); 

    // Плагин для преобразования .scss в .css
    grunt.loadNpmTasks('grunt-contrib-sass');
    // Плагин для выполнения изменений в реальном времени
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Плагин для отслеживания ошибок в JavaScript
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // Плагин для минификации JavaScript-файлов
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Плагин для минификации CSS-файлов
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Регистрация задач
    grunt.registerTask('default', ['sass', 'jshint', 'uglify', 'cssmin', 'watch']);
};