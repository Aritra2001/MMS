import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import React from "react";
import Peer from "./Peer";
import { BsFillPersonFill } from "react-icons/bs";

function Conference() {
  const peers = useHMSStore(selectPeers);
  return (
    <div className="conference-section">
      <h2 id="count">Conference &nbsp; <BsFillPersonFill size={30}/><div className="counter">{peers.length}</div></h2>
      <div className="peers-container">
        {peers.map((peer) => (
          <Peer key={peer.id} peer={peer} />
        ))}
      </div>
    </div>
  );
}

export default Conference;
