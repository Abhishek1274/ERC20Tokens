const Hre = require("hardhat");
async function main() {
    await Hre.run("verify:verify", {
      //Deployed contract Referer address
      address: "0x44078dc780c8f8866415217BF11f0fEa59edADDB",
      //constructor arguments.
      constructorArguments:[100000],
      //Path of your main contract.
      contract: "contracts/Token.sol:Abhishek_Token",
  });
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });