const { network, ethers } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config")

module.exports = async (hre) => {
    const { getNamedAccounts, deployments } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    let poolAddressProvider, mockSimpleFlashLoanReceiver

    poolAddressProvider = networkConfig[chainId].V3PoolAddressProvider

    const waitBlockConfirmations = 1
    const flashloan = await deploy("FlashLoan", {
        from: deployer,
        args: [poolAddressProvider],
        log: true,
        waitBlockConfirmations: waitBlockConfirmations,
    })

    console.log("闪电贷合约地址:", flashloan.address)

}
module.exports.tags = ["deploy", "flashloan"]
