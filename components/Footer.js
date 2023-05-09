import Link from 'next/link';
import { navLinks } from '@/data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="text-white bg-charcoal flex flex-col justify-center items-center gap-12 px-6 -mx-6">
      <hr className="w-[100px] border-t-4 border-fadedOrange" />
      <span className="font-poppins text-2xl font-semibold tracking-wide">
        audiophile
      </span>

      <ul className="text-[13px] font-medium tracking-[2px] uppercase flex flex-col justify-center items-center gap-4">
        {navLinks.map(link => (
          <li key={link.id}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <p className="text-[15px] font-light leading-[25px] text-center opacity-[0.5]">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <span className="text-[15px] font-medium tracking-[0.3px] opacity-[0.5]">
        Copyright 2021. All Rights Reserved
      </span>

      <div className="text-2xl flex gap-4 mb-[38px]">
        <a href="#">
          <FontAwesomeIcon icon={faSquareFacebook}></FontAwesomeIcon>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
      </div>
    </footer>
  );
}
