import { HiStar } from 'react-icons/hi';
import { MdRateReview } from 'react-icons/md';

const Review = () => {
  const reviews = [
    {
      _id: 1,
      title: 'Yamikani is a Super Rockstar Tutor!',
      description:
        'Yamikani was fantastic at helping me understand how to approach a problem and was able to clearly explain new concepts. Extremely knowledgeable on a lot when it comes to maths. He takes the time to go over anything you need help with. Made sure I had complete understanding of all the topic we reviewed. Definitely would work with again.',
      date_posted: 'March 18, 2023',
      rating: 4.2,
    },
    {
      _id: 2,
      title: 'Great teacher',
      description:
        ' A very productive session as always and he always finds a time that is right for me can’t ask for better. After being exposed to some much needed background information corrections were made and the final output was fixed to be correct.',
      date_posted: 'September 28, 2022',
      rating: 3.6,
    },
    {
      _id: 3,
      title: 'Patient and knowledgeable',
      description:
        'He gave in-depth explanations and never made me feel like my questions weren’t warranted. He is a very good teacher!  I reached out to him last minute and he reached out in a timely and efficient manner and made sure we got it done on time.',
      date_posted: 'June 8, 2022',
      rating: 4.8,
    },
  ];
  return (
    <>
      <div className="flex flex-col max-w-4xl">
        <div className="flex mb-4">
          <MdRateReview className="fill-[#1c1c1c] w-10 h-10 mr-2" />
          <h2 className="text-[32px] font-semibold text-left text-[#1c1c1c]">
            Tutor Evaluation
          </h2>
        </div>
        <div className="">
          <div className="flex flex-col justify-evenly">
            <h3 className="text-2xl font-bold text-left text-black">Review</h3>
            <div>
              <ul className="text-xs font-light text-gray-600 dark:text-gray-300">
                {reviews.map((review) => (
                  <li key={review._id} className="mb-1 sm:mb-4">
                    <div className="flex">
                      <h4 className="mr-2 font-bold text-left text-black text-md md:text-lg">
                        {review.title}
                      </h4>
                      <div className="flex">
                        <HiStar className="text-[#FDD500] mt-[1px] h-6 w-6" />
                        <h4 className="mr-2 text-md md:text-lg font-bold text-left text-[#FDD500]">
                          {review.rating}
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs md:text-base text-left text-[#adaba8]">
                      {review.date_posted}
                    </p>
                    <p className="text-xs italic text-left text-black md:text-base">
                      {review.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <button className="underline text-lg text-left text-[#d03434]">
          See more reviews
        </button>
      </div>
    </>
  );
};

export default Review;
