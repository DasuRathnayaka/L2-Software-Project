import {ethers} from "ethers";
import {nftaddress, nftmarketaddress, rpc} from "../config";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export const URINFTDataMapper = async (i) => {
    const provider = new ethers.providers.JsonRpcProvider(rpc);
    const nftContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const ipfsUrlSuffix = process.env.NEXT_PUBLIC_IPFS_URL_PREFIX;

    let tokenUri;
    try {
        tokenUri = await nftContract.tokenURI(i.tokenId.toNumber());
    } catch (e) {
        console.error(e);
    }

    let meta;
    try {
        meta = await axios.get(ipfsUrlSuffix + tokenUri, {maxRedirects: 5});
    } catch (e) {
        console.error(e);
    }
    let price = ethers.utils.formatUnits(i.price.toString(), 'ether');


    return {
        price,
        tokenId: i.tokenId.toNumber(),
        itemId: i.itemId,
        nftContract: i.nftContract,
        owners: i.owners.map(owner => Object.assign({}, owner)),
        sold: i.sold,
        thumbnail: meta.data.thumbnail,
        attachments: meta.data.attachments,
        name: meta.data.name,
        description: meta.data.description,
        more_data: meta.data.more_data,
    };
}

export default async function loadNFTs(forceReload=false) {
    // forceReload = true;
    // debugger;
    if (!forceReload && process.env.NEXT_PUBLIC_CASH_LOAD_NFT) {
        const nftData = JSON.parse(secureLocalStorage.getItem("nft"));
        // debugger;
        if (nftData) {
            return new Promise((resolve, reject) => resolve(nftData));
        }
    }


    const provider = new ethers.providers.JsonRpcProvider(rpc);
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider);

    const data = await marketContract.fetchAllMarketItems();
    const items = await Promise.all(data.map(URINFTDataMapper)).catch(err => {
        console.error(err)
    });

    if (!items) {
        console.error("Error getting items.");
        return []
    } else {
        secureLocalStorage.setItem("nft", JSON.stringify(items));
        return items
    }
}
