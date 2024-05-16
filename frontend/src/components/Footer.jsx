import { useAVToggle } from "@100mslive/react-sdk";
import { IoMdMic, IoMdMicOff } from "react-icons/io";
import { PiVideoCameraLight, PiVideoCameraSlashFill } from "react-icons/pi";
import { useHMSActions } from "@100mslive/react-sdk";
import { FaPhone } from "react-icons/fa";

function Footer() {

    const hmsActions = useHMSActions();

  const {
    isLocalAudioEnabled,
    isLocalVideoEnabled,
    toggleAudio,
    toggleVideo
  } = useAVToggle();
  return (
    <div className="control-bar">
      <button className="btn-control" onClick={toggleAudio}>
        {isLocalAudioEnabled ? <IoMdMic size={25}/> : <IoMdMicOff size={25}/>}
      </button>
      <button className="btn-control" onClick={toggleVideo}>
        {isLocalVideoEnabled ? <PiVideoCameraLight size={25} /> : <PiVideoCameraSlashFill size={25} />}
      </button>
      <button className="btn-danger" onClick={() => hmsActions.leave()}><FaPhone size={25} /></button>
    </div>
  );
}

export default Footer;
