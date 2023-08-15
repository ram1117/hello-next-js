import React from 'react';

function Page() {
  return (
    <div className="w-1/2 h1/2 my-16">
      <video
        width="100%"
        height="100%"
        controls
        autoPlay
        muted
      >
        <source
          src="https://drive.google.com/uc?id=1IxVST9uxX-AbfB5iORON9k3sAGlb6IpA"
          type="video/mp4"
        />
        <track src="" kind="subtitles" srcLang="en" label="English" />
      </video>
    </div>
  );
}
export default Page;
