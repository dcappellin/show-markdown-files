module.exports = function(grunt) {

    grunt.initConfig({
        copy: {
            githubMarkdownCss: {
                src: "./node_modules/github-markdown-css/github-markdown.css",
                dest: "./css/github-markdown.css"
            },
            markedJs: {
                src: "./node_modules/marked/marked.min.js",
                dest: "./js/marked.min.js"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('copy', ['copy']);
};
