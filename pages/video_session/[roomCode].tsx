import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/SessionContext';

/**
 * Room page rendered dynamically based on the provided room code.
 * Uses ZegoSuperBoardManager plugin for video conferencing and whiteboard functionality.
 * @param {string} roomCode - The room code for the current room.
 */
const RoomCode = ({ roomCode }) => {
  const router = useRouter();
  const { RoomCode } = router.query;

  const { user } = useContext(AuthContext);

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
      user ? user.user.name.toString() : 'joe'
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    const { ZegoSuperBoardManager } = await import('zego-superboard-web');

    zp.addPlugins({ ZegoSuperBoardManager });
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
    <div
      className="w-full max-h-screen h-screen rounded-2xl bg-transparent"
      ref={myMeeting}
    ></div>
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
