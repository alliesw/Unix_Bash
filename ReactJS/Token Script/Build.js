// Build
var jsTokens = require("js-tokens").default

var jsString = "var foo=opts.foo;\n..."

jsString.match(jsTokens)
// ["var", " ", "foo", "=", "opts", ".", "foo", ";", "\n", ...]
