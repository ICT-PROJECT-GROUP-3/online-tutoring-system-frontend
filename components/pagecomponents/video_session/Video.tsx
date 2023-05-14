// import { AgoraVideoPlayer } from "agora-rtc-react";
// import { useState, useEffect } from "react";

// interface VideoProps {
//   users: any[];
//   tracks: boolean[];
// }

// export default function Video(props: VideoProps): JSX.Element {
//   const { users, tracks } = props;
//   const [gridSpacing, setGridSpacing] = useState(12);

//   useEffect(() => {
//     // Calculate grid spacing based on the number of users
//     setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
//   }, [users, tracks]);

//   return (
//     <div className="h-full">
//       <div className={`gap-${gridSpacing}`}>
//         {/* Display local video track */}
//         <AgoraVideoPlayer
//           videoTrack={tracks[1]}
//           style={{ height: "100%", width: "100%" }}
//         />
//       </div>
//       {users.length > 0 &&
//         users.map((user) => {
//           if (user.videoTrack) {
//             return (
//               <div className={`gap-${gridSpacing}`} key={user.uid}>
//                 {/* Display remote video tracks */}
//                 <AgoraVideoPlayer
//                   videoTrack={user.videoTrack}
//                   style={{ height: "100%", width: "100%" }}
//                 />
//               </div>
//             );
//           } else return null;
//         })}
//     </div>
//   );
// }
