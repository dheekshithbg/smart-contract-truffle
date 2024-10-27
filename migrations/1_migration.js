const file = artifacts.require("./Storage.sol");

module.exports = function(deployer) {
    deployer.deploy(file);
};