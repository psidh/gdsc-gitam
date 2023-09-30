export default function GDSCOpportunities() {
  return (
    <div className="py-10 px-4 sm:py-16 sm:px-8 md:py-20 md:px-12 lg:py-24 lg:px-16 xl:py-28 xl:px-16 bg-[#C2DDF8]">
      <img src="" alt="GDSC Logo" className="w-full" />
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2">
        <p className="text-[#4466B2]">Empower</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4">
          Join GDSC and unlock endless opportunities
        </h2>
        <p className="mt-4 sm:mt-6">
          By joining the Google Developer Student Clubs (GDSC) at GITAM
          University, students can gain valuable skills, expand their network,
          and receive exciting swags. GDSC provides a platform for students to
          learn, collaborate, and grow as developers.
        </p>
        <div className="flex flex-col sm:flex-row gap-y-6 sm:gap-x-6 mt-6 sm:mt-8">
          <section>
            <h3>Learn</h3>
            <p>
              Participate in workshops, webinars, and coding competitions to
              enhance your skills.
            </p>
          </section>
          <section>
            <h3>Connect</h3>
            <p>
              Network with like-minded individuals, industry experts, and
              potential employers.
            </p>
          </section>
        </div>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row">
          <button className="w-full sm:w-auto px-6 py-3 border border-[#4466B2] rounded-lg text-[#4466B2] mb-2 sm:mb-0 sm:mr-4">
            Learn More
          </button>
          <button className="w-full sm:w-auto px-6 py-3 rounded-lg">Join Us</button>
        </div>
      </div>
    </div>
  );
}
