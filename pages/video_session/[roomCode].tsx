import { useRouter } from 'next/router';
import { useEffect } from 'react';

// import plugin
// import { ZegoSuperBoardManager } from "zego-superboard-web";

//rendering dynamic room id page

const RoomCode = ({ roomCode }) => {
  const router = useRouter();
  const { RoomCode } = router.query;

  const myMeeting = async (element) => {
    // generate Kit Token
    const appID = 2112098631;
    const serverSecret = '246fe42e6eb945060b2ddb08e65cf9f8';
    const { ZegoUIKitPrebuilt } = await import(
      '@zegocloud/zego-uikit-prebuilt'
    );
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      RoomCode.toString(),
      Date.now().toString(),
      'ramama'
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    const { ZegoSuperBoardManager } = await import('zego-superboard-web')

    zp.addPlugins({ZegoSuperBoardManager});
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      whiteboardConfig: {            
        showAddImageButton: true, 
     },
      showTurnOffRemoteCameraButton: false,
      showTurnOffRemoteMicrophoneButton: false,
      showRemoveUserButton: false,
    });
  };

  return (
    <div className='w-full h-full' ref={myMeeting}>
    </div>
  );
};

export async function getStaticPaths() {
  // Return an empty paths array
  return {
    paths: [],
    fallback: true, // Enable fallback mode
  };
}

export async function getStaticProps({ params }) {
  const { RoomCode } = params;
  return {
    props: {
      roomCode: RoomCode,
    },
  };
}

export default RoomCode;
