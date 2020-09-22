const version = require('./copyPackage');
var shell = require("shelljs");

module.exports = function writePackageJson() {
  // 方法2：调用npm命令修改version值
  const vs=version.split('.');
  let lastv=vs.pop();
  lastv= parseInt(lastv) + 1;
  vs.push(lastv);
  const wholeVersion = vs.join(".");
  console.log(wholeVersion);
  shell.exec("npm version " + wholeVersion)
}