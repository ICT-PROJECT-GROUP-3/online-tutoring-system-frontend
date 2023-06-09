import { FC } from 'react';
import ToolTip from '../buttons/tooltip';

interface Props {
  title: string;
  info: string;
}

const Title: FC<Props> = ({ title, info }): JSX.Element => {
  return (
    <>
      <div className="flex my-2">
        <label
          className="mr-2 font-bold text-[#1C1C1C] text-base sm:text-md md:text-left md:mb-0"
          htmlFor="location"
        >
          {title}
        </label>
        <ToolTip tooltip={info} />
      </div>
    </>
  );
};

export default Title;
