import { createClient } from '@sanity/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CardDropShadow from '../../../../components/common/cards/card-dropshadow';
import Title from '../../../../components/common/input/title';
import Navbar from '../../../../components/shared/navbar/Navbar';

const client = createClient({
  projectId: '3iouolde',
  dataset: 'production',
  useCdn: true,
});

const TeacherEvaluation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (formData) => {
    try {

      const existingTutorId = 'mary-banda';
     
      await client.create({
        _type: 'review',
        review: formData.review,
        tutor: { _type: 'reference', _ref: formData.tutor },
        
      });
      alert('Review submitted successfully!');
    } catch (error) {
      console.error('Error creating review:', error);
      alert('An error occurred while submitting the review.');
    }
  };

  const questions = [
    { name: 'Treats the student with respect' },
    { name: 'Communicates clearly' },
    { name: 'Is prepared for the session' },
    { name: 'Is knowledgeable about the subject matter' },
    { name: 'Manages time well' },
    { name: 'Is flexible in accommodating the students needs' },
    { name: 'Is clear in giving directions and explaining what is expected' },
  ];

  const ratingInputs = [
    { name: 'Strongly Disagree', value: 1 },
    { name: 'Disagree', value: 2 },
    { name: 'Neutral', value: 3 },
    { name: 'Agree', value: 4 },
    { name: 'Strongly Agree', value: 5 },
  ];

  const [selectedRatings, setSelectedRatings] = useState({});

  const isRatingSelected = (question, value) =>
    selectedRatings[question] === value;

  const handleRadioClick = (question, value) => {
    setSelectedRatings((prevRatings) => ({
      ...prevRatings,
      [question]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-11/12 mx-auto my-8 md:w-4/5 lg:w-3/5 justify-items-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl text-center text-[#1c1c1c] my-8">
          Tutor Evaluation
        </h1>
        <div className="mb-8">
          <CardDropShadow>
          <form onSubmit={handleSubmit(submit)} className="m-8">
        {/* ... */}
        {questions.map((question) => (
          <div
            className="flex flex-col justify-center w-auto mx-8 my-12"
            key={question.name}
          >
            <h3 className="w-auto text-[#0D0C07] text-center inline text-[24px] font-medium mb-2">
              {question.name}
            </h3>
            <div className="flex items-center justify-center">
              <p className="text-[#1c1c1c] text-[18px] mr-4">
                Strongly Disagree
              </p>
              {ratingInputs.map((input) => (
                <input
                  key={input.value}
                  type="radio"
                  name={`rating-${question.name}`}
                  value={input.value}
                  className="mx-2 h-12 w-12 accent-[#F4E4D2] border-[#EAE8E4] text-[#F4AB4E] focus:ring-orange-500 focus:ring-2"
                  checked={isRatingSelected(question.name, input.value)}
                  onChange={() => handleRadioClick(question.name, input.value)}
                />
              ))}
              <p className="text-[#1c1c1c] text-[18px] ml-4">Strongly Agree</p>
            </div>
          </div>
        ))}
      </form>
      
          </CardDropShadow>
        </div>
        <div className="mb-8">
          <CardDropShadow>
            <form onSubmit={handleSubmit(submit)} className="m-8">
              <div className="flex-col mb-6 md:flex md:items-center">
                <div className="mb-4 md:w-full">
                  <Title
                    title="Title"
                    info="Give a brief statement about your experience with the tutor"
                  />
                </div>
                <div className="md:w-full">
                  <input
                    {...register('title')}
                    className="bg-white appearance-none border-2 border-[#EAE8E4] rounded w-full py-4 px-4 text-[#1c1c1c] leading-tight focus:outline-none focus:bg-white focus:border-[#f4ab4e]"
                    id="inline-full-name"
                    type="text"
                    placeholder="Example: Yamikani is a Super Rockstar Tutor!"
                  />
                </div>
              </div>
              <div className="flex-col mb-6 md:flex md:items-center">
                <div className="mb-4 md:w-full">
                  <Title
                    title="Description"
                    info="Give a detailed description about your experience with the tutor"
                  />
                </div>
                <div className="md:w-full">
                  <textarea
                    {...register('description')}
                    className="bg-white text-sm md:text-base appearance-none border-2 focus:border-transparent border-[#EAE8E4] rounded w-full py-2 px-2 text-[#1c1c1c] leading-tight focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    id="description"
                    rows={8}
                    placeholder="Example: Yamikani was fantastic at helping me understand how to approach a problem and was able to clearly explain new concepts. Extremely knowledgeable on a lot when it comes to maths. He takes the time to go over anything you need help with. Made sure I had complete understanding of all the topic we reviewed. Definitely would work with again."
                  ></textarea>
                </div>
              </div>
              <input
                type="submit"
                value="Add Review"
                className="rounded-[2px] bg-[#d03434] border-[#d03434] p-2 w-auto text-lg text-center text-[#fbf6e6]"
              />
            </form>
          </CardDropShadow>
        </div>
      </div>
    </>
  );
};

export default TeacherEvaluation;
