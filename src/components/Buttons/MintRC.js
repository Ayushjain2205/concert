import React, { useState } from "react";
import { useSigner } from "@thirdweb-dev/react";
import abi from "../../abi/RoyalCoin";
import { ethers } from "ethers";
import { successToast, errorToast } from "../../helpers/showToast";

const contractAddress = "0xDb499857812569403F0aA1036d453d30945C8751";
const walletAddress = "0xCafa93E9985793E2475bD58B9215c21Dbd421fD0"; // This seems unused in the original code, but I've kept it here just in case.

const MintRC = () => {
  const [inputValue, setInputValue] = useState(100);
  const signer = useSigner();

  // Initialize the contract instance with the signer
  const contract = new ethers.Contract(contractAddress, abi, signer);

  // This function will be executed when the minting button is pressed
  const mintTokens = async () => {
    let to = walletAddress; // Assuming this is the recipient address for minting
    const amount = ethers.utils.parseUnits(inputValue.toString(), 0);

    try {
      await contract.mint(to, amount);
      successToast(`${amount} tokens added to your wallet`);
    } catch (error) {
      errorToast("Error buying tokens");
    }
  };

  return (
    <button
      onClick={mintTokens} // Linking the mintTokens function to the button
      className="btn btn-outline btn-primary rounded-xl w-full outline-none"
    >
      Buy
      <img src="/icons/royale-coin.svg" className="h-[32px]" alt="" />
    </button>
  );
};

export default MintRC;
