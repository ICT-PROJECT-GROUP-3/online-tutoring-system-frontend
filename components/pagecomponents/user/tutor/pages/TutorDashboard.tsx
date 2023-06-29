import { createClient } from '@sanity/client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { FaMoneyBill, FaUser } from 'react-icons/fa';
import { MdOutlineStarRate } from 'react-icons/md';
import { AuthContext } from '../../../../../context/auth/SessionContext';
import TutorNavbar from '../TutorNavbar';
const client = createClient({
  projectId: '3iouolde',
  dataset: 'production',
  apiVersion: '2023-06-18', // The API version you are using
  useCdn: false, // Set to true if you want to enable the Content Delivery Network (CDN)
});
const TutorDashboard = () => {
  //   const currentYear: number = new Date().getFullYear();
  // console.log(currentYear + ",");

  const pageName = 'Dashboard';
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [numberOfSessions, setNumberOfSessions] = useState(0);

  const { tutor } = useContext(AuthContext);
  // console.log('The Tutor is:' + tutor + 'tutor id' + tutor[0]._id);
  const tutorData = JSON.stringify(tutor);
  // const tutorData = tutor[0];
  const tutorId = tutor[0]._id;
  //  '9d11251a-60c3-431e-8763-38fbfa9acf4a';

  console.log('The tutor object is:' + tutorData + 'tutor Id is:::' + tutorId);
  // const tutorId = tutor?._id;

  const TodayCardData = [
    {
      name: 'Students',
      value: '53',
      percentage: '+55%',
      since: 'since yesterday',
      reactIcon: <FaUser />,
      colour: 'bg-green-600', // Replace with the desired color value
    },
    {
      name: 'Money',
      value: '2,300',
      percentage: '+3%',
      since: 'since last week',
      reactIcon: <FaMoneyBill />,
      colour: 'bg-blue-600', // Replace with the desired color value
    },
    {
      name: 'Sessions',
      value: '+3,462',
      percentage: '-2%',
      since: 'since last quarter',
      reactIcon: <FaUser />,
      colour: 'bg-gray-400', // Replace with the desired color value
    },
    {
      name: 'Rating',
      value: '4.5/5',
      percentage: '+5%',
      since: 'than last month',
      reactIcon: <MdOutlineStarRate />,
      colour: 'bg-red-600', // Replace with the desired color value
    },
  ];

  //students
  interface Student {
    image: string;
    name: string;
    subject: string;
    sessions: number;
  }

  //number of sessions
  const sessions = (studentId) => {
    // client.fetch(``)

    // Fetch students data
    client
      .fetch(
        `count(*[_type == 'session' && tutor._ref == $tutorId && student._ref == $studentId])`,
        { tutorId, studentId }
      )
      .then((data) => {
        console.log(
          'Number of sessions of each student is::' +
            data +
            'student id is:' +
            studentId
        );
        setNumberOfSessions(data);
      })
      .catch((error) => {
        console.error('Error fetching students data:', error);
      });
    return numberOfSessions;
  };

  useEffect(() => {
    // Fetch students data
    client
      .fetch(
        `*[_type == 'session' && tutor._ref == $tutorId]{
      "studentRef": student._ref,
      "firstName": student->first_name,
      "lastName": student->last_name,
      "subject": subject->subject
    }`,
        { tutorId }
      )
      .then((data) => {
        const response = JSON.stringify(data);
        console.log('Students from session schema is:', response);
        data.forEach((studentData) => {
          console.log('student data is::' + studentData);
        });
        setStudents(data);

        // setSubjects(data);
      })
      .catch((error) => {
        console.error('Error fetching students data:', error);
      });

    // Fetch subjects data
    client
      .fetch(
        `*[_type == 'session' && tutor._ref == $tutorId].subject->{subject}`,
        { tutorId }
      )
      .then((data) => {
        console.log('Subjects from session are :' + data);
      })
      .catch((error) => {
        console.error('Error fetching subjects data:', error);
      });

    // Fetch number of sessions
    client
      .fetch(`count(*[_type == 'session' && tutor._ref == $tutorId])`, {
        tutorId,
      })
      .then((data) => {})
      .catch((error) => {
        console.error(
          'Error occured whilst fetching number of sessions' + error
        );
      });
  }, [tutorId]);
  // Student[] = [
  //   {
  //     image: 'student1.jpg',
  //     name: 'John Doe',
  //     subject: 'Mathematics',
  //     sessions: 10,
  //   },
  //   {
  //     image: 'student2.jpg',
  //     name: 'Jane Smith',
  //     subject: 'Science',
  //     sessions: 8,
  //   },
  //   {
  //     image: 'student3.jpg',
  //     name: 'Michael Johnson',
  //     subject: 'History',
  //     sessions: 12,
  //   },
  //   {
  //     image: 'student5.jpg',
  //     name: 'David Wilson',
  //     subject: 'Computer Science',
  //     sessions: 9,
  //   },
  // ];

  //subjects

  interface Subject {
    reactIcon: JSX.Element;
    name: string;
    numberOfStudents: number;
    earnings: number;
  }

  // const subjects: Subject[] = [
  //   {
  //     reactIcon: <FaBook />,
  //     name: 'Literature',
  //     numberOfStudents: 100,
  //     earnings: 5000,
  //   },
  //   {
  //     reactIcon: <FaFlask />,
  //     name: 'Science',
  //     numberOfStudents: 80,
  //     earnings: 6000,
  //   },
  //   {
  //     reactIcon: <FaCode />,
  //     name: 'Computer Programming',
  //     numberOfStudents: 120,
  //     earnings: 8000,
  //   },
  //   {
  //     reactIcon: <FaLanguage />,
  //     name: 'Foreign Languages',
  //     numberOfStudents: 50,
  //     earnings: 4000,
  //   },
  // ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.6 }}
    >
      <TutorNavbar pageName={pageName} />
      {/* <!-- cards --> */}
      <div className="lg:ml-72 px-6 py-6 mx-auto">
        {/* <!-- row 1 --> */}
        <div className="flex flex-wrap -mx-3">
          {TodayCardData.map((card, i) => (
            <motion.div
              key={i}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: i * 0.3 }}
              className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"
            >
              <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-2">
                      <div className="w-full">
                        <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase text-gray dark:opacity-60">
                          {card.name}
                        </p>
                        <h5 className="mb-2 font-bold text-gray-600">
                          {card.value}
                        </h5>
                        {/* <p className="mb-0 text-gray-600 dark:opacity-60 ">
                          <span className="text-sm font-bold leading-normal text-emerald-500">
                            {card.percentage}{' '}
                          </span>
                          {card.since}
                        </p> */}
                      </div>
                    </div>
                    <div className="px-3 text-right basis-1/3">
                      <div
                        className={`w-10 h-10 text-center rounded-full flex justify-center items-center bg-gradient-to-tl ${card.colour} `}
                      >
                        {card.reactIcon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* frequent students */}

        <div className="flex flex-wrap mt-6 -mx-3">
          <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-600 border-black-125 rounded-2xl bg-clip-border">
              <div className="p-4 pb-0 mb-0 rounded-t-4">
                <div className="flex justify-between">
                  <h6 className="mb-2 dark:text-white">Frequent students</h6>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
                  <tbody>
                    {students?.map((student) => (
                      <motion.tr
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        transition={{
                          duration: 0.6,
                          ease: 'easeInOut',
                          delay: 2 * 0.3,
                        }}
                        key={student.studentRef}
                      >
                        <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                          <div className="flex items-center px-2 py-1">
                            <div>
                              <Image
                                src="/assets/images/profilePic.png"
                                width={50}
                                height={50}
                                alt="Country flag"
                                className="rounded-lg"
                              />
                            </div>
                            <div className="ml-6">
                              <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                                Name:
                              </p>
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">
                                {student.firstName}
                                {student.lastName}
                                {/* {student._ref} */}
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                          <div className="text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              Sessions:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              {/* {student.sessions} */}
                              {sessions(student.studentRef)}
                            </h6>
                          </div>
                        </td>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                          <div className="text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                              Subject:
                            </p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">
                              {/* {subjects.subject} */}
                              {student.subject}
                            </h6>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* my trending subjects */}
          <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
            <div className="border-black/12.5 shadow-xl bg-white dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl max-h-96 border-0 border-solid bg-clip-border">
              <div className="p-4 pb-0 rounded-t-4">
                <h6 className="mb-0 text-gray-700 font-semibold">
                  My trending subjects
                </h6>
              </div>
              <div className="flex-auto p-4">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  {subjects?.map((subject, i) => (
                    <motion.li
                      key={i}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 50, opacity: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: 'backInOut',
                        delay: 1 + i * 0.3,
                      }}
                      className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-xl text-inherit"
                    >
                      <div className="flex items-center">
                        <div className="flex justify-center items-center w-8 h-8 mr-4 text-center text-white bg-center shadow-sm fill-current stroke-none bg-gradient-to-tl from-zinc-400 to-zinc-500 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 rounded-xl">
                          {subject.reactIcon}
                        </div>
                        <div className="flex flex-col">
                          <h6 className="mb-1 text-sm leading-normal text-black-600">
                            {subject.name}
                          </h6>
                          <span className="text-xs leading-tight text-gray-600">
                            {subject.numberOfStudents} students,{' '}
                            <span className="font-semibold">
                              {subject.earnings} earned
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex">
                        <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all">
                          <i
                            className="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                            aria-hidden="true"
                          >
                            <AiOutlineRight />
                          </i>
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end cards --> */}
    </motion.div>
  );
};

export default TutorDashboard;
