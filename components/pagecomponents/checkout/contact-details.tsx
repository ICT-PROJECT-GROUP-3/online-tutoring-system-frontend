import CardDropShadow from '../../common/cards/card-dropshadow';

const ContactDetails = () => {
  return (
    <>
      <div className="">
        <h2 className="text-[32px] text-left text-black">Contact details</h2>
        <CardDropShadow>
          <div className="grid w-3/4 grid-cols-2 gap-2 p-4">
            <p className="text-lg font-semibold text-left text-black ">
              Phone number:
            </p>

            {/* Place tutor's phone number - number */}
            <p className="text-lg text-left text-black ">0990909099</p>

            <p className="text-lg font-semibold text-left text-black">Email:</p>

            {/* Place tutor's email address - string */}
            <p className="text-lg text-left text-[#72b4c2]">
              yamikani.namphande@gmail.com
            </p>
            <p className="text-lg font-semibold text-left text-black">
              Location:
            </p>

            {/* Place tutor's specific address - string*/}
            <p className="text-lg text-left text-black">
              Mulunguzi Zomba, Malawi
            </p>
          </div>
        </CardDropShadow>
      </div>
    </>
  );
};

export default ContactDetails;
