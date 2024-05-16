import { useVideo } from "@100mslive/react-sdk";

function Peer({ peer }) {

  var name = localStorage.getItem('user');
  const { videoRef } = useVideo({
    trackId: peer.videoTrack
  });
  return (
    <div className="peer-container">
      <video
        ref={videoRef}
        className={`peer-video ${peer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsInline
      />
      <div className="peer-name">
        {peer.name} {name}
      </div>
    </div>
  );
}

export default Peer;
