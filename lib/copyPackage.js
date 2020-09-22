const fs = require('fs');
const path = require("path");
const cbDataPackage = getPackageJson()
function getPackageJson() {
  var _packageJson = fs.readFileSync(path.join(path.resolve("."),"package.json"))
  return JSON.parse(_packageJson)
}
module.exports = cbDataPackage.version;