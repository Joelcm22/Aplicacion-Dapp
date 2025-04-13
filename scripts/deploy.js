const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Cuenta deployer:", deployer.address);

  const Saludo = await hre.ethers.getContractFactory("Saludo");
  const saludo = await Saludo.deploy();
 
  await saludo.waitForDeployment(); // 🆕 esta es la forma moderna
  console.log("Contrato desplegado en:", await saludo.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});