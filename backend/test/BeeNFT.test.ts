import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract, Signer } from "ethers";

describe("BeeNFT Contract", function () {
  let beeNFT: Contract;
  let owner: Signer;
  let addr1: Signer;
  let addr2: Signer;
  const BEE_TOKEN_URI = "https://red-peculiar-fly-715.mypinata.cloud/ipfs/bafybeig5pcansyrdcwcrm56rr3e2aemrohola52jhjnzx5dirxmlf3ru3y";

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    [owner, addr1, addr2] = await ethers.getSigners();
    const BeeNFT = await ethers.getContractFactory("BeeNFT");

    // Deploy a new BeeNFT contract for each test
    beeNFT = await BeeNFT.deploy();
    await beeNFT.deployed();
  });

  describe("Deployment", function () {
    it("Should set the correct token name and symbol", async function () {
      expect(await beeNFT.name()).to.equal("BeeNFT");
      expect(await beeNFT.symbol()).to.equal("BEE");
    });
  });

  describe("Minting", function () {
    it("Should mint a new Bee NFT to the caller and emit a BeeNFTMinted event", async function () {
      // Mint a token from addr1 and check that the BeeNFTMinted event is emitted.
      await expect((beeNFT as any).connect(addr1).mintBeeNFT())
        .to.emit(beeNFT, "BeeNFTMinted")
        .withArgs(await addr1.getAddress(), 1);

      // Check that addr1 is the owner of token ID 1.
      expect(await beeNFT.ownerOf(1)).to.equal(await addr1.getAddress());

      // Check that the token URI is correctly set.
      expect(await beeNFT.tokenURI(1)).to.equal(BEE_TOKEN_URI);
    });

    it("Should increment token IDs correctly with multiple mints", async function () {
      // Mint tokens from two different addresses.
      await (beeNFT as any).connect(addr1).mintBeeNFT(); // tokenId 1
      await (beeNFT as any).connect(addr2).mintBeeNFT(); // tokenId 2

      // Validate token ownership.
      expect(await beeNFT.ownerOf(1)).to.equal(await addr1.getAddress());
      expect(await beeNFT.ownerOf(2)).to.equal(await addr2.getAddress());
    });
  });
});
