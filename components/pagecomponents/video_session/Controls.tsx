// import { useState } from 'react';
// import { useClient } from "./Settings";
// import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs';
// import { BiVideo, BiVideoOff } from 'react-icons/bi';
// import { ImPhoneHangUp } from 'react-icons/im';

// interface ControlsProps {
//   tracks: MediaStreamTrack[];
//   setStart: (start: boolean) => void;
//   setInCall: (inCall: boolean) => void;
// }

// export default function Controls(props: ControlsProps): JSX.Element {
//   const client = useClient();
//   const { tracks, setStart, setInCall } = props;
//   const [trackState, setTrackState] = useState({ video: true, audio: true });

//   const mute = async (type: string): Promise<void> => {
//     if (type === 'audio') {
//       await tracks[0].enabled(!trackState.audio);
//       setTrackState((prevState) => {
//         return { ...prevState, audio: !prevState.audio };
//       });
//     } else if (type === 'video') {
//       await tracks[1].setEnabled(!trackState.video);
//       setTrackState((prevState) => {
//         return { ...prevState, video: !prevState.video };
//       });
//     }
//   };

//   const leaveChannel = async (): Promise<void> => {
//     await client.leave();
//     client.removeAllListeners();
//     tracks[0].stop();
//     tracks[0].enabled = false;
//     tracks[1].stop();
//     tracks[1].enabled = false;
//     setStart(false);
//     setInCall(false);
//   };

//   return (
//     <div className='flex gap-4 items-center'>
//       <div>
//         <button
//           onClick={() => mute('audio')}
//           aria-label={trackState.audio ? 'Mute Audio' : 'Unmute Audio'}
//         >
//           {trackState.audio ? <BsFillMicFill /> : <BsFillMicMuteFill />}
//         </button>
//       </div>
//       <div>
//         <button
//           onClick={() => mute('video')}
//           aria-label={trackState.video ? 'Turn Off Video' : 'Turn On Video'}
//         >
//           {trackState.video ? <BiVideo /> : <BiVideoOff />}
//         </button>
//       </div>
//       <div>
//         <button onClick={() => leaveChannel()} aria-label="Leave Call">
//           Leave
//           <ImPhoneHangUp />
//         </button>
//       </div>
//     </div>
//   );
// }
