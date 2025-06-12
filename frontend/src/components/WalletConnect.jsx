import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: new InjectedConnector() });
  const { disconnect } = useDisconnect();

  return (
    <div className="mb-4">
      {isConnected ? (
        <div>
          <p>Connected: {address}</p>
          <button onClick={disconnect} className="bg-red-500 p-2 rounded">Disconnect</button>
        </div>
      ) : (
        <button onClick={connect} className="bg-green-600 p-2 rounded">Connect Wallet</button>
      )}
    </div>
  );
}
