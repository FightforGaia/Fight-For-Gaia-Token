var FgaiaToken = artifacts.require("./FgaiaToken.sol");

module.exports = function(deployer) {
  deployer.deploy(FgaiaToken);
};
