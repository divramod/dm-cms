// =========== [ REQUIRE ] ===========
var grunt = require("grunt");
grunt.loadNpmTasks('grunt-bump');

// =========== [ avoid loading Gruntfile.js ] ===========
grunt.task.init = function() {};

// =========== [ GRUNT CONFIG ] ===========
grunt.initConfig({
    bump: {
        options: {
            files: ['package.json'],
            updateConfigs: [],
            commit: true,
            commitMessage: 'Release v%VERSION%',
            commitFiles: ['package.json'],
            createTag: true,
            tagName: 'v%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: true,
            pushTo: 'origin',
            gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
            globalReplace: false,
            prereleaseName: false,
            regExp: false
        }
    }
});
