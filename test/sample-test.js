const { assert } = require("chai");

describe("qprWinsThisSeason", function () {
  it("Should return wins and an updated value of modifyWins", async function () {
    const wins = 46;
    const QprWinsThisSeason = await ethers.getContractFactory("qprWinsThisSeason");
    const qprWinsThisSeason = await QprWinsThisSeason.deploy(wins);
    await qprWinsThisSeason.deployed();

    let actual = await qprWinsThisSeason.wins();

    assert.equal(actual.toNumber(), 46);

    const y = 7;

    await qprWinsThisSeason.modifyWins(y);
    actual = await qprWinsThisSeason.wins();
    assert.equal(y, actual);
  });
});
