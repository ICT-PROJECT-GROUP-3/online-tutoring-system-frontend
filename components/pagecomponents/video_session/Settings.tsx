// import { createClient, createMicrophoneAndCameraTracks, IAgoraRTCClient, IAgoraRTCVideoTrack, IAgoraRTCAudioTrack, SDK_CODEC } from "agora-rtc-react";

// // Agora App ID and Token
// const appId: string = "3049c7b676ce49b6a62ad6d1655324fa";
// const token: string = "006902b2e809ca54994ba1af501720d3c0fIACMQnjd3Mmto7F08fdn+kIOkO1sh1WR8GxyXXqdOV7yzWTNKL8AAAAAEAA8g5F5sImxYAEAAQCwibFg";

// // Agora RTC configuration
// export const config: { mode: string; codec: SDK_CODEC; appId: string } = {
//   mode: "rtc",
//   codec: SDK_CODEC.H264,
//   appId: appId,
// };

// // Create an Agora RTC client
// export const useClient: () => IAgoraRTCClient = createClient(config);

// // Create microphone and camera tracks
// export const useMicrophoneAndCameraTracks: () => {
//   ready: boolean;
//   tracks: [IAgoraRTCAudioTrack | undefined, IAgoraRTCVideoTrack | undefined];
// } = createMicrophoneAndCameraTracks();

// // Channel name
// export const channelName: string = "main";
