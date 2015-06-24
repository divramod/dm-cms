// =========== [ REQUIRE ] ===========
var co = require("co");
var colors = require("colors");
var grunt = require("grunt");
require("shelljs/global");

// =========== [ MODULE DEFINE ] ===========
var job = {};

// =========== [ job.index() ] ===========
// has to be started from project root
job.start = co.wrap(function*() {
    // ARGS
    var arg = process.argv[2];
    if (arg === "clone") {
        var message = "Hello Clone";
        console.log(message.green);

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
    }

    // RETURN
    return yield Promise.resolve(result);
}); // job.index()

// =========== [ MODULE EXPORT ] ===========
module.exports = job;
