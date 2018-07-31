var FgaiaToken = artifacts.require("./FgaiaToken.sol");
var FgaiaTokenSale = artifacts.require("./FgaiaTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(FgaiaToken, 1000000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(FgaiaTokenSale, FgaiaToken.address, tokenPrice);
  });
};
