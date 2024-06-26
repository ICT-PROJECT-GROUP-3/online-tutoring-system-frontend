import Image from 'next/image';
import HomePageWrapper from './HomePageWrapper';

/**
 * Represents the Team component.
 * It displays a footer section showcasing the team members of a company.
 */
const Team = () => {
  /**
   * An array of team members with their names, roles, and image URLs.
   * @type {Array<{ name: string, role: string, imageUrl: string }>}
   */
  const people = [
    {
      name: 'Madalo ChikuKhuzeni',
      role: 'Co-Founder / CEO',
      imageUrl: '/image/team/Profilepic.png',
    },
    {
      name: 'Isaac Chingancheke',
      role: 'Co-Founder / CEO',
      imageUrl: '/image/team/isaac.webp',
    },
    {
      name: 'Bright Nthala',
      role: 'Co-Founder / CEO',
      imageUrl: '/image/team/isaac.webp',
    },
    {
      name: 'Chance Mshani',
      role: 'Co-Founder / CEO',
      imageUrl: '/image/team/themba.jpg',
    },
    {
      name: 'Themba Tizifa',
      role: 'Co-Founder / CEO',
      imageUrl: '/image/team/themba.jpg',
    },
  ];

  return (
    <HomePageWrapper>
      <div className="py-24 bg-gray-300 rounded-lg shadow-lg sm:py-32">
        <div className="grid px-6 mx-auto max-w-7xl gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our leadership<span className="text-orange-500">.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our diverse and talented team comprises skilled developers and
              passionate professionals working together to deliver outstanding
              online tutoring experiences.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-12 xl:col-span-2"
          >
            {people.map((person) => (
              <li
                key={person.name}
                className="p-8 bg-gray-100 shadow-inner rounded-xl"
              >
                <div className="flex items-center gap-x-3">
                  <Image
                    className="w-16 h-16 rounded-full"
                    src={person.imageUrl}
                    alt=""
                    width={50}
                    height={50}
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-orange-500">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HomePageWrapper>
  );
};

export default Team;
