export default function Home() {
  return (
    <main className="h-screen">
      <header className="bg-homeHeader bg-cover bg-no-repeat bg-bottom h-screen">
        <div className="text-white h-screen flex flex-col justify-center items-center mx-6">
          <span className="opacity-[0.5] text-sm tracking-[10px] uppercase mb-4">
            New Product
          </span>
          <h1 className="font-bold text-4xl text-center tracking-[1.28571px] uppercase mb-6">
            XX99 Mark II Headphones
          </h1>
          <p className="font-light text-center leading-[25px] opacity-[0.75] w-[328px] mb-[28px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="bg-fadedOrange font-medium tracking-[1px] uppercase py-4 px-9">
            See Product
          </button>
        </div>
      </header>
    </main>
  );
}
