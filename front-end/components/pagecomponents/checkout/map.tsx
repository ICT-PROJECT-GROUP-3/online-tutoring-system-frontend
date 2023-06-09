import Image from 'next/image';
import React from 'react';
import CardDropShadow from '../../common/cards/card-dropshadow';

const Map = () => {
  return (
    <>
      <div className="">
        <h2 className="text-[32px] text-left text-black">Map</h2>
        <CardDropShadow>
          {/* Show a google map view of the tutors location, !only as long as they're willing to teach at their house - gps coordinates */}
          <Image
            width={280}
            height={280}
            src="/assets/images/gps.png"
            className="object-cover w-full rounded-2"
            alt="Profile picture"
          />
        </CardDropShadow>
      </div>
    </>
  );
};

export default Map;
