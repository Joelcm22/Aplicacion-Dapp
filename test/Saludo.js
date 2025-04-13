const { expect } = require("chai");

describe("Saludo", function () {
  it("Debe tener un mensaje inicial correcto", async function () {
    const Saludo = await ethers.getContractFactory("Saludo");
    const saludo = await Saludo.deploy();
    await saludo.waitForDeployment();

    expect(await saludo.mensaje()).to.equal("Hola");
  });

  it("Debe permitir cambiar el mensaje", async function () {
    const Saludo = await ethers.getContractFactory("Saludo");
    const saludo = await Saludo.deploy();
    await saludo.waitForDeployment();

    await saludo.setMensaje("Nuevo saludo");
    expect(await saludo.mensaje()).to.equal("Nuevo saludo");
  });
});
