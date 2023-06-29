import Layout from "../layout"
import { fetchReviews } from "../../../../lib/services/sanity/reviewservice";
import { useState, useEffect } from "react";



const ViewReview = () => {
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

    return(
        <>
        <Layout>
        <h1 className="text-xl sm:text-2xl md:text-4xl text-center text-[#1c1c1c] my-8">
          Tutor Review
        </h1>

        {reviews.map((review) => (
          <div key={review._id}>
            {/* Render individual review fields */}
            {review.tutor && (
              <div>
                
                <p>Tutor Fullname: {review.tutor.fullname}</p>
              </div>
            )}

            {/* Access the questions field */}
            {review.questions && (
              <div>
                <h3>Questions (Rated from 1-5) </h3>
                {review.questions.map((question) => (
                  <div key={question._key}>
                    <p>{question.question}</p>
                    <p>Rating: {question.rating}</p>
                    {/* Render other question fields as needed */}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        </Layout>
        </>
    )
}
export default ViewReview;