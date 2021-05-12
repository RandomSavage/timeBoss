// Must install with npm install lodash

const _ = require('lodash')

let example = _.fill([1,2,3,4,5], "banana",1,4)
console.log(example)

//semantic version and symbol meaning of packages
/* 4.17.21
major.minor.patch
^ = only minor and patch can be upgraded 4.x.x
~ = only path can be upgraded 4.17.x
for strict semantic version only = 4.17.21 */