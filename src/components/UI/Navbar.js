import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-primary hover:bg-white font-bold">
          <img src="/data-royale-logo.svg" className="h-[40px]" alt="" />
          Data Royale
        </a>
      </div>
      <div className="flex-none gap-[40px] mx-[20px]">
        <div className="flex flex-row gap-[8px] items-center">
          <span className="font-bold text-[20px]">50</span>
          <img src="/icons/royale-coin.svg" className="w-[35px]" alt="" />
        </div>
        <ConnectWallet className="connect-button" />
      </div>
    </div>
  );
};

export default Navbar;
