import Link from "next/link";

const RegularButton = ({ name }) => {
    return ( 
        <div className="rounded-[5px] bg-[#d03434] p-2 w-auto">
            <p className="text-lg text-center text-[#fbf6e6]">
                {name}
            </p>
        </div>
     );
}
 
export default RegularButton;