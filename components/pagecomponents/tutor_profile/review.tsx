import { HiStar } from 'react-icons/hi';
import { MdRateReview } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { fetchReviews } from '../../../lib/services/sanity/reviewservice';

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const reviewsData = await fetchReviews();
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviewData();
  }, []);

  const calculateAverageRating = (questions) => {
    const ratings = questions.map((question) => question.rating);
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    const averageRating = sum / ratings.length;
    return averageRating.toFixed(2); // Limit to 2 decimal places
  };
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
                {/* Render fetched reviews */}
                {reviews.map((review) => (
                  <li key={review._id} className="mb-1 sm:mb-4">
                    {/* Render individual review fields */}
                    <div className="flex">
                      <h4 className="mr-2 font-bold text-left text-black text-md md:text-lg">
                        {review.title}
                      </h4>
                      <div className="flex">
                        <h4 className="mr-2 text-md md:text-lg font-bold text-left text-[#FDD500]">
                        {calculateAverageRating(review.questions)}
                        </h4>
                        <HiStar className="text-[#FDD500] mt-[1px] h-6 w-6" />
                      </div>
                    </div>
                    <p className="text-xs md:text-base text-left text-[#adaba8]">
                      {review.date_posted}
                    </p>
                    <p className="text-xs italic text-left text-black md:text-base">
                    <ul>
                        {review.review.map((block) => (
                          <li key={block._key}>
                            {block.children.map((child) => (
                              <p key={child._key}>{child.text}</p>
                            ))}
                          </li>
                        ))}
                      </ul>
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
