
import RegularButton from "@/components/common/buttons/primary-button";
import CardFlat from "@/components/common/cards/card-flat";
import VideoPlayer from "@/components/common/video-player";
import Link from "next/link";

const ProfileSummary = () => {
    return (
        <>
            <div className="fixed w-80">
                <CardFlat>

                    {/* Place tutor's mock lesson video - video*/}
                    <VideoPlayer />

                    <div className="m-4">

                        {/* Place tutor's name - string */}
                        <p className="text-2xl text-center text-black">
                            Yamikani Namphande
                        </p>

                        {/* Place the subjects the tutor teaches - list,string */}
                        <p className="text-md text-center text-[#1c1c1c] mb-2">
                            Biology, Mathematics and agriculture
                        </p>
                        
                        <svg
                            width={280}
                            height={1}
                            viewBox="0 0 280 1"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=""
                            preserveAspectRatio="none"
                        >
                            <line y1="0.5" x2={280} y2="0.5" stroke="#DAD5CE" />
                        </svg>
                        <div className="grid w-auto grid-cols-2 m-2 gap-x-1">
                            <div className="">

                            {/* Place the longest distance tutor can travel - number*/}
                            <p className="text-sm text-left text-[#1c1c1c]">
                                20km
                            </p>

                            </div>
                            <div className="">

                            {/* Total teaching experience - number  */}
                            <p className="text-sm text-right text-[#1c1c1c]">
                                5.0 yrs
                            </p>

                            </div>
                            <div className="">

                            {/* Place the language the tutor knows  - string  */}
                            <p className="text-sm text-left text-[#1c1c1c]">
                                Chichewa, Tumbuka
                            </p>

                            </div>
                            <div className="">
                            <p className="text-sm text-right text-[#1c1c1c]">5yrs</p>
                            </div>
                        </div>
                        <div className="my-4 text-center">
                            <p className="text-xl text-black">Hourly Rate:</p>
                            <div className="my-1">


                                {/* Place the minimum and maximum amount the tutor asks for - number  */}
                                <p className="text-sm text-[#1c1c1c]">
                                MWK8000 - MWK10000
                                </p>

                            </div>

                            {/* This button should take the user to payment options of the tutor */}
                            <Link href="/payment" >
                                <RegularButton name='Get Contact'/>
                            </Link>

                            <p className="my-1 text-xl text-black">
                                <span className="text-xl text-black">Response time:</span>

                                {/* Place the average response time of tutors responding - time  */}
                                <span className="text-xl font-bold text-black"> 39 minutes</span>

                            </p>
                        </div>
                    </div>
                </CardFlat>
            </div>
        </> 
     );
}
 
export default ProfileSummary;