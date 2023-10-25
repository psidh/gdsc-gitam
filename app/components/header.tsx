export default function Header() {
  return (
    <div className="flex flex-col lg:flex-row bg-[#5383EC] 
    text-white px-6 md:px-24 w-full lg:h-[39rem] overflow-x-hidden">
      
      <div className="space-y-6 lg:space-y-8 py-24 w-full">
        <h1 className="text-4xl leading-[2.7rem] lg:text-6xl lg:leading-[4.5rem] w-[14ch]">
          Empowering students through Google Developer Student Clubs
        </h1>
        <p>
          Join our community of passionate students and learn the latest in
          technology.
        </p>
        <button className="px-6 py-3 bg-white rounded-lg text-black mr-4">
          Learn More
        </button>
        <button className="px-6 py-3 border rounded-lg">Join Us</button>
      </div>
      
      <img src="/images/header-image-carousel.png" className="ml-auto" />

    </div>
  );
}