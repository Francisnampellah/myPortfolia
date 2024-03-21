import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col md:flex-row lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMG CONTAINER */}
      <div className="flex-1 relative">
        <Image src="/hero.png" fill className="object-contain fill" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col gap-8 items-center justify-center  ">
        {/* TITLE */}
        <h1 className="text-4xl md:text-xl font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        {/* DESC */}
        <p className="md:text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          laboriosam accusantium, quos, quas quidem, quae voluptatem quia autem
          voluptates consequatur. Quod, tempore. Quisquam, quibusdam. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
          {/* BUTTON */}
        <div className="flex gap-4 p-4">
          <button className="p-4 rounded-lg ring-1 ring-black text-white bg-black font-bold">Get Started</button>
          <button className="p-4 rounded-lg ring-1 ring-black font-bold">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
