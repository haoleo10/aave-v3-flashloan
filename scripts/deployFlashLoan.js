const { network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config")

async function main() {
    const FlashLoanFactory = await ethers.getContractFactory("FlashLoan")
    //sepolia v3 pool address provider:'0x0496275d34753A48320CA58103d5220d394FF77F'
    console.log(`hhh${networkConfig[network.config.chainId]}`)
    const FlashLoan = await FlashLoanFactory.deploy(
        networkConfig[network.config.chainId].V3PoolAddressProvider
    )
    await FlashLoan.deployed()
    console.log("闪电贷合约地址:", FlashLoan.address)
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
