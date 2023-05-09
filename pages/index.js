import Image from 'next/image';
import ShopItem from '@/components/ShopItem';
import Footer from '@/components/Footer';

import { homepageData } from '@/data';

export default function Home() {
  return (
    <main className="bg-white h-screen mx-6">
      <header className="bg-homeHeader bg-cover bg-no-repeat bg-bottom h-screen -mx-6">
        <div className="text-white h-screen flex flex-col justify-center items-center">
          <span className="opacity-50 text-sm tracking-[10px] uppercase mb-4">
            New Product
          </span>
          <h1 className="font-bold text-4xl text-center tracking-[1.28571px] uppercase mb-6">
            XX99 Mark II Headphones
          </h1>
          <p className="font-light text-center leading-[25px] opacity-75 w-[328px] mb-[28px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="bg-fadedOrange text-[13px] font-medium tracking-[1px] uppercase py-4 px-9 hover:bg-lightFadedOrange">
            See Product
          </button>
        </div>
      </header>

      <section className="flex flex-col gap-20 my-20">
        {homepageData.map(item => (
          <ShopItem
            key={item.name}
            item={item.item}
            href={item.href}
            img={item.img.src}
          />
        ))}
      </section>

      <section className="flex flex-col gap-6 my-[100px]">
        <div className="text-white bg-fadedOrange flex flex-col justify-center items-center rounded-lg px-6 py-14">
          <Image
            src="/assets/mobile/home/home-speakers.png"
            width={172}
            height={207}
            alt="ZX9 Speaker"
          />

          <span className="text-4xl font-bold tracking-[1.28px] uppercase mt-8">
            ZX9 Speaker
          </span>
          <p className="text-[15px] font-light text-center opacity-75 my-6">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="bg-black text-[13px] font-medium tracking-[1px] uppercase py-4 px-9 hover:text-white hover:bg-[#686868ea]">
            See Product
          </button>
        </div>

        <div className="text-black bg-zx7Speaker bg-cover bg-no-repeat bg-bottom min-w-[327px] h-[320px] flex flex-col justify-center items-start gap-8 rounded-lg pl-6">
          <span className="text-[28px] font-bold tracking-[2px] uppercase">
            ZX7 Speaker
          </span>

          <button className="text-[13px] font-medium tracking-[1px] uppercase border-black border-[1px] py-4 px-9 hover:text-white hover:bg-black">
            See Product
          </button>
        </div>

        <div className="bg-yx1Earphones bg-cover bg-no-repeat bg-center min-w-[327px] h-[200px] rounded-lg"></div>
        <div className="text-black bg-lightGrey min-w-[327px] h-[200px] flex flex-col justify-center items-start gap-8 rounded-lg pl-6">
          <span className="text-[28px] font-bold tracking-[2px] uppercase">
            YX1 Earphones
          </span>
          <button className="text-[13px] font-medium tracking-[1px] uppercase border-black border-[1px] py-4 px-9 hover:text-white hover:bg-black">
            See Product
          </button>
        </div>
      </section>

      <section className="text-black flex flex-col items-center my-[120px]">
        <Image
          src="/assets/mobile/home/best-gear.jpg"
          width={437}
          height={300}
          alt="Guy using XX99 Mark II Headphones"
          className="min-w-[327px] rounded-lg mb-10"
        />

        <h2 className="text-[28px] font-bold tracking-[1px] text-center uppercase w-[327px] mb-8">
          Bringing you the <span className="text-fadedOrange">best</span> audio
          gear
        </h2>
        <p className="text-[15px] font-light leading-[25px] text-center opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </section>
      <Footer />
    </main>
  );
}
