import React, { useEffect } from "react";
import { ConnectWallet, useAddress, useBalance } from "@thirdweb-dev/react";
import Link from "next/link";
import { ethers } from "ethers"; // Importing ethers for the BigNumber utility

const Navbar = () => {
  const address = useAddress();
  const tokenAddress = "0xDb499857812569403F0aA1036d453d30945C8751";
  const { data, isLoading } = useBalance(tokenAddress);

  useEffect(() => {
    if (data && !isLoading) {
      console.log("Raw balance:", data.value.toString());
      console.log(
        "Token balance:",
        ethers.utils.formatUnits(data.value, data.decimals)
      );
    }
  }, [data, isLoading]);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <>
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl text-primary hover:bg-white font-bold"
          >
            <img src="/data-royale-logo.svg" className="h-[40px]" alt="" />
            Data Royale
          </Link>
        </>
      </div>
      <div className="flex-none gap-[40px] mx-[20px]">
        {address && data && (
          <div className="flex flex-row gap-[8px] items-center">
            <span className="font-bold text-[20px] text-[#9381FF]">
              {isLoading ? "Loading..." : data.value.toString()}
            </span>
            <img src="/icons/royale-coin.svg" className="w-[35px]" alt="" />
          </div>
        )}
        <ConnectWallet theme="light" className="connect-button" />
      </div>
    </div>
  );
};

export default Navbar;
