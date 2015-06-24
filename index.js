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
      var message = "Hello Clone";
      console.log(message.green);

    }

    // TODO restart docker container
    // TODO checkout specific tag

    // RETURN
    return yield Promise.resolve(result);
}); // job.index()

// =========== [ MODULE EXPORT ] ===========
module.exports = job;
