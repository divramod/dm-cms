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

// =========== [ TASK REGISTRATION ] ===========
grunt.registerTask('mytask', function() {
    grunt.log.write('Ran my task.');
});

// =========== [ TASK RUNNER ] ===========
function run() {
    var args = process.argv;
    var task = args[3];
    if (task) {
        switch (task) {
            case "test":
                test();
                break;
            case "bump":
                bump();
                break;
            default:
                console.log("task " + task + " doesn't exists!");
        }
    } else {
        console.log("no task selected");
    }
}


// =========== [ TASKS ] ===========
function test() {

    // Finally run the tasks, with options and a callback when we're done
    grunt.tasks(['mytask'], {}, function() {
        grunt.log.ok('Done running tasks.');
    });
}

function bump() {

    grunt.tasks(['bump'], {}, function() {
        grunt.log.ok('Done running bump.');
    });

}


// =========== [ EXPORT ] ===========
module.exports.run = run;
