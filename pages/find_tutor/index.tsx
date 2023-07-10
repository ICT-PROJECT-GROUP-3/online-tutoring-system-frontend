import Fuse from 'fuse.js';
import { useEffect, useState } from 'react';
import Filter from '../../components/pagecomponents/find_tutor/filter';
import Search from '../../components/pagecomponents/find_tutor/search';
import TutorCard from '../../components/pagecomponents/find_tutor/tutor-card';
import Background from '../../components/shared/background/background';
import SideFooter from '../../components/shared/footer/side-footer';
import Navbar from '../../components/shared/navbar/Navbar';
import { fetchData } from '../../lib/services/sanity/connect';

const FindTutor = () => {
  const [tutorData, setTutorData] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetchData().then((tutor) => {
      console.log(tutor);
      setTutorData(tutor);
      setFilteredTutors(tutor);
    });
  }, []);

  const handleSearch = (searchTerm, locationTerm) => {
    if (!searchTerm && !locationTerm) {
      setFilteredTutors(tutorData);
      setNoResults(false);
      return;
    }

    const options = {
      includeScore: true,
      keys: ['area_of_expertise', 'location'],
    };

    const fuse = new Fuse(tutorData, options);
    let filteredResults = tutorData;

    if (searchTerm) {
      const searchResults = fuse.search(searchTerm);
      filteredResults = searchResults
        .filter((result) => result.score < 0.3) // Adjust the threshold as needed
        .map((result) => result.item);
    }

    if (locationTerm) {
      filteredResults = filteredResults.filter(
        (tutor) =>
          tutor.location &&
          tutor.location.toLowerCase().includes(locationTerm.toLowerCase())
      );
    }

    if (filteredResults.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
    setFilteredTutors(filteredResults);
  };

  return (
    <Background>
      <Navbar />
      <div className="flex flex-col mt-16">
        <div className="flex flex-row w-screen h-screen">
          <div className="w-1/5">
            <div className="w-96 h-screen fixed pt-4 bg-[#f4f3f2] border-t-0 border-r-[1.5px] border-b-0 border-l-0 border-[#e5e3df]/80">
              <div className="flex flex-col items-center justify-center w-auto mx-auto my-8">
                <Filter />
                <SideFooter />
              </div>
            </div>
          </div>
          <div className="flex flex-col content-center w-4/5 pt-16">
            <Search handleSearch={handleSearch} />

            <div className="grid content-start w-auto grid-cols-1 gap-8 p-2 justify-items-center">
              {/*Search result here */}

              {/* Map tutors over here */}

              {noResults ? (
                <div>No Results</div>
              ) : (
                filteredTutors.map((tutor) => (
                  <TutorCard
                    key={tutor._id}
                    bio={tutor.bio}
                    name={tutor.name}
                    slug={tutor.slug}
                    area_of_expertise={tutor.area_of_expertise}
                    total_teaching_experience={tutor.total_teaching_experience}
                    rating={tutor.rating}
                    price={tutor.price}
                    languages={tutor.languages}
                    subjects={tutor.subjects}
                    location={tutor.location}
                    education_qualifications={tutor.education_qualifications}
                    session_duration={tutor.session_duration}
                    weeklyAvailability={tutor.weekly_availability}
                    timeSlots={tutor.time_slots}
                    maximum_number_of_sessions={
                      tutor.maximum_number_of_sessions
                    }
                    homework_help={tutor.homework_help}
                    can_travel={tutor.can_travel}
                    phone_number={tutor.phone_number}
                    email={tutor.email}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default FindTutor;
