import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function ShopItem({ item, href, img, bottom }) {
  return (
    <div className="bg-lightGrey flex flex-col justify-center items-center rounded-lg">
      <img src={img} className={`w-[79.92px] relative bottom-${bottom}`} />
      <div className="text-black flex flex-col items-center relative bottom-4">
        <span className="text-[15px] font-bold tracking-[1.07px] uppercase mb-4">
          {item}
        </span>

        <Link href={href} className="flex items-center gap-3">
          <span className="text-[13px] font-bold tracking-[1px] uppercase opacity-[0.5]">
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
