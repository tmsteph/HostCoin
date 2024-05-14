// scripts/deploy.js
async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const HostCoin = await ethers.getContractFactory("HostCoin");
    const hostCoin = await HostCoin.deploy(1000000);
  
    await hostCoin.deployed();
  
    console.log("HostCoin deployed to:", hostCoin.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  