import Image from 'next/image';

const Hero = () => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center bg-[url('/newsroom.jpg')] bg-cover bg-center md:flex-row"
      style={{
        height: 'calc(100vh - 80px)',
      }}
    >
      <div className="flex h-[30%] flex-col items-center justify-center p-8 pb-20 text-white md:h-full md:w-1/2">
        <div className="w-[80%]">
          <h1 className="pb-4 text-6xl font-bold">Newsroom</h1>
          <h2 className="text-2xl">
            Tweets, press releases, mentions in the news. Stay up to date with
            all the latest happening at Telcoin.
          </h2>
        </div>
      </div>
      <div className="flex h-[70%] w-full items-center justify-center md:h-full md:w-1/2">
        <div className="relative h-[85%] w-[80%]">
          <Image
            src="https://cdn.pixabay.com/photo/2015/04/06/11/03/cloud-709092_1280.jpg"
            alt=""
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
