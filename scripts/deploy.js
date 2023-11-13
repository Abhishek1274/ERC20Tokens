const { ethers } = require("hardhat");

async function main() {
  // Deploy the Abhishek_Token contract
  const AbhishekToken = await ethers.getContractFactory("Abhishek_Token");
  const abhishekToken = await AbhishekToken.deploy(100000); // Pass the desired totalSupply as an argument

  //await abhishekToken.deploy();

  console.log("Abhishek Token deployed to:", abhishekToken.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
