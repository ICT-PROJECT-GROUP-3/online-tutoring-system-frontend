import Image from 'next/image';
import HomePageWrapper from './HomePageWrapper';

const people = [
  {
    name: 'Madalo ChikuKhuzeni',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Isaac Chingancheke',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Bright Nthala',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Chance Mshani',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Themba Tizifa',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const Team = () => {
  return (
    <HomePageWrapper>
    <div className="bg-gray-300 py-24 sm:py-32 shadow-lg rounded-lg">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
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
              className="bg-gray-100 p-8 rounded-xl shadow-inner"
            >
              <div className="flex items-center gap-x-3">
                <Image
                  className="h-16 w-16 rounded-full"
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
