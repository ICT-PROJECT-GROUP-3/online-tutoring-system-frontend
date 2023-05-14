// import { useEffect, useState } from 'react';
// import Controls from './Controls';
// import {
//   channelName,
//   config,
//   useClient,
//   useMicrophoneAndCameraTracks,
// } from './Settings';
// import Video from './Video';

// interface VideoCallProps {
//   setInCall: (inCall: boolean) => void;
// }

// export default function VideoCall(props: VideoCallProps): JSX.Element {
//   const { setInCall } = props;
//   const [users, setUsers] = useState<any[]>([]);
//   const [start, setStart] = useState(false);
//   const client = useClient();
//   const { ready, tracks } = useMicrophoneAndCameraTracks();

//   useEffect(() => {
//     // Initialize the video call
//     let init = async (name: string): Promise<void> => {
//       // Event handler for when a user publishes their media
//       client.on('user-published', async (user: any, mediaType) => {
//         await client.subscribe(user, mediaType);
//         if (mediaType === 'video') {
//           setUsers((prevUsers) => [...prevUsers, user]);
//         }
//         if (mediaType === 'audio') {
//           user.audioTrack.play();
//         }
//       });

//       // Event handler for when a user unpublishes their media
//       client.on('user-unpublished', (user: any, mediaType: string) => {
//         if (mediaType === 'audio') {
//           if (user.audioTrack) user.audioTrack.stop();
//         }
//         if (mediaType === 'video') {
//           setUsers((prevUsers) =>
//             prevUsers.filter((user) => user.uid !== user.uid)
//           );
//         }
//       });

//       // Event handler for when a user leaves the call
//       client.on('user-left', (user: any) => {
//         setUsers((prevUsers) =>
//           prevUsers.filter((user) => user.uid !== user.uid)
//         );
//       });

//       try {
//         await client.join(config.appId, name, config.token, null);
//       } catch (error) {
//         console.log('error');
//       }

//       if (tracks) await client.publish([tracks[0], tracks[1]]);
//       setStart(true);
//     };

//     if (ready && tracks) {
//       try {
//         init(channelName);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }, [channelName, client, ready, tracks]);

//   return (
//     <div className='flex-col h-full'>
//       {/* Controls component */}
//       <div className='h-1/10'>
//         {ready && tracks && (
//           <Controls tracks={tracks} setStart={setStart} setInCall={setInCall} />
//         )}
//       </div>
//       {/* Video component */}
//       <div className='h-9/10'>
//         {start && tracks && <Video tracks={tracks} users={users} />}
//       </div>
//     </div>
//   );
// }
