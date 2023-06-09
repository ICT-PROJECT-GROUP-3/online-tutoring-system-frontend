import Tippy from '@tippyjs/react';
import { FC } from 'react';
import { IoMdInformationCircle } from 'react-icons/io';
import 'tippy.js/dist/tippy.css';

interface Props {
  tooltip: string;
}

const ToolTip: FC<Props> = ({ tooltip }): JSX.Element => {
  return (
    <div className="relative inline-block group">
      <Tippy content={tooltip}>
        <button title="more info">
          <span className="sr-only">{tooltip}</span>
          <IoMdInformationCircle className="text-[#d03434] opacity-50" />
        </button>
      </Tippy>
    </div>
  );
};

export default ToolTip;
