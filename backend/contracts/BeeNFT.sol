// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import OpenZeppelin Contracts for ERC721 functionality and access control.
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/// @title BeeNFT
/// @notice This contract allows users to mint Bee NFTs on the Sepolia network.
/// @dev Inherits from ERC721URIStorage for token URI management and Ownable for access control.
contract BeeNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds; // Counter for tracking NFT IDs

    /// @notice Constant token URI for Bee NFT metadata.
    /// @dev Replace "YOUR_IPFS_HASH_FOR_BEE_METADATA" with the actual IPFS hash pointing to your metadata JSON.
    string public constant BEE_TOKEN_URI = "https://red-peculiar-fly-715.mypinata.cloud/ipfs/bafybeig5pcansyrdcwcrm56rr3e2aemrohola52jhjnzx5dirxmlf3ru3y";

    /// @notice Emitted when a new Bee NFT is minted.
    /// @param recipient The address receiving the newly minted NFT.
    /// @param tokenId The unique identifier of the minted NFT.
    event BeeNFTMinted(address indexed recipient, uint256 indexed tokenId);

    /// @notice Initializes the BeeNFT contract by setting the token name and symbol.
    /// @dev Calls the ERC721 constructor with "BeeNFT" as the token name and "BEE" as the token symbol.
    constructor() ERC721("BeeNFT", "BEE") {}

    /// @notice Mints a new Bee NFT to the caller's address.
    /// @dev Increments the internal token counter, safely mints a new NFT, assigns the metadata URI,
    /// and emits the BeeNFTMinted event.
    /// @return newTokenId The token ID of the newly minted NFT.
    function mintBeeNFT() public returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        // _safeMint ensures the receiving address is capable of handling ERC721 tokens.
        _safeMint(msg.sender, newTokenId);

        // Assign the predefined bee metadata URI to the minted token.
        _setTokenURI(newTokenId, BEE_TOKEN_URI);

        // Emit the event to facilitate off-chain indexing and UI updates.
        emit BeeNFTMinted(msg.sender, newTokenId);
        
        return newTokenId;
    }
}
