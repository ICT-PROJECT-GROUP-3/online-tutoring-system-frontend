import Image from 'next/image';

/**
 * The Team component.
 * @returns {JSX.Element} The JSX element representing the Team component.
 */
const team = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-500">About Us</h1>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra
            cursus ex, sed pellentesque massa iaculis ac. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Donec id neque luctus, tristique mauris ut, bibendum nisi. Sed
            fringilla, nisi vitae volutpat porta, dui sem finibus erat, vel
            egestas metus sem id quam.
          </p>
        </div>

        <div className="mt-8">
          <div className="mb-8 md:flex">
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-4 text-orange-500">
                Our Mission
              </h2>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                pharetra cursus ex, sed pellentesque massa iaculis ac.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec id neque luctus, tristique mauris
                ut, bibendum nisi. Sed fringilla, nisi vitae volutpat porta, dui
                sem finibus erat, vel egestas metus sem id quam.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl font-semibold mb-4 text-orange-500">
                Our Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <TeamMemberCard
                  name="Themba Tizifa"
                  role="Project Manager"
                  imageSrc="/image/team/themba.jpg"
                />
                <TeamMemberCard
                  name="Bright Nthala"
                  role="Front-End Developer"
                  imageSrc="/image/team/themba.jpg"
                />
                <TeamMemberCard
                  name="Chance Mshani"
                  role="Back-end Developer"
                  imageSrc="/image/team/themba.jpg"
                />
                <TeamMemberCard
                  name="Isaac Nchingancheke"
                  role="Front-End Developer"
                  imageSrc="/image/team/themba.jpg"
                />
                <TeamMemberCard
                  name="Madalo Chikhunkudzeni"
                  role="Back-end Developer"
                  imageSrc="/image/team/themba.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * The TeamMemberCard component.
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the team member.
 * @param {string} props.role - The role of the team member.
 * @param {string} props.imageSrc - The image source of the team member.
 * @returns {JSX.Element} The JSX element representing the TeamMemberCard component.
 */
const TeamMemberCard = ({ name, role, imageSrc }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="relative w-36 h-36 mx-auto">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h3 className="text-lg font-semibold mt-4">{name}</h3>
      <p className="text-gray-700">{role}</p>
    </div>
  );
};

export default team;
