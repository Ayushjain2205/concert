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
      <div className="flex-none mx-[20px]">
        <ConnectWallet className="connect-button" />
      </div>
    </div>
  );
};

export default Navbar;
