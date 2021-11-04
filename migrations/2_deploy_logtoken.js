const LogToken = artifacts.require("LogToken");

module.exports = function (deployer) {
  deployer.deploy(LogToken)
};
