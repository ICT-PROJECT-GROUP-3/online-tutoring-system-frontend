const VideoPlayer = () => {
  return (
    <div className="rounded-[5px]">
      <video
          controls
          src="assets/videos/Test video.mp4"
          className="w-96"
      ></video>
    </div>
  )
}

export default VideoPlayer