// =========== [ REQUIRE ] ===========
var co = require("co");
var colors = require("colors");
require("shelljs/global");

// =========== [ MODULE DEFINE ] ===========
var job = {};

// =========== [ job.index() ] ===========
// has to be started from project root
job.start = co.wrap(function*() {
    // ARGS
    var arg = process.argv[2];
    if (arg === "clone") {
        require('./lib/grunt.js').run();
    } else if (arg === "install") {
        exec('sudo npm install . -g', {
            silent: false
        });

    } else if (arg === "bump") {
        exec('git add -A && git commit -m "publish" && git push -u origin HEAD', {
            silent: false
        });
        exec('npm version patch -m "Bumped to version %s"', {
            silent: false
        });

    } else if (arg === "publish") {

        exec('git add -A && git commit -m "publish" && git push -u origin HEAD', {
            silent: false
        });
        exec('grunt bump', {
            silent: false
        });
        exec('sudo npm install . -g', {
            silent: false
        });
        exec('npm publish ./', {
            silent: false
        });
    } else {
        console.log("The parameter " + arg + " is not supported!");

    }

    // RETURN
    return yield Promise.resolve(result);
}); // job.index()

// =========== [ MODULE EXPORT ] ===========
module.exports = job;
