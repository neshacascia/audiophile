import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function ShopItem({ item, href, img }) {
  return (
    <div className="bg-lightGrey flex flex-col justify-center items-center relative rounded-lg">
      <img src={img} className={`w-[79.92px] relative bottom-10`} />
      <div className="text-black flex flex-col items-center relative bottom-4">
        <span className="text-[15px] font-bold tracking-[1.07px] uppercase mb-4">
          {item}
        </span>

        <Link
          href={href}
          className="text-gray-500 flex items-center gap-3 hover:text-fadedOrange"
        >
          <span className="text-[13px] font-bold tracking-[1px] uppercase hover:text-fadedOrange">
            Shop
          </span>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-fadedOrange"
          ></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
}
