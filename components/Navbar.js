import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="text-white bg-greyBlack h-[90px] flex justify-between items-center border-b-[1px] border-gray-400 px-6 py-8">
      <FontAwesomeIcon icon={faBars} className="w-5"></FontAwesomeIcon>
      <span className="font-poppins text-2xl font-semibold tracking-wide">
        audiophile
      </span>
      <FontAwesomeIcon icon={faCartShopping} className="h-5"></FontAwesomeIcon>
    </nav>
  );
}
