import React from 'react'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from 'react-router-dom';
;

const RoomPage = () => {

const {roomId} = useParams();

const myMeeting = async(element) =>{
    const appID = 726174454;
    const serverSecret = "c3c6a5cad5f3829f5e725380d1e7e4d5";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "Shreyan"
    );
   const zp = ZegoUIKitPrebuilt.create(kitToken);
   zp.joinRoom({
    container: element,
    scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
    },
   });
};


  return (
    <div className="room-page">
      <div ref={myMeeting} />
    </div>
  );
};

export default RoomPage
