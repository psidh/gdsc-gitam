import { Codesandbox } from "react-feather";

export default function HowItWorks() {
  return (
    <div className="py-28 px-16 bg-[#E6F2FD] w-full">
      <h2 className="text-4xl text-center font-bold">
        Discover Exciting Events, Projects, and Community Interactions
      </h2>
      <div className="flex gap-x-16 mt-20">
        <section className="flex items-center flex-col text-center">
          <Codesandbox />
          <h3 className="font-medium mt-6">
            Engage in a Vibrant Community of Developers and Innovators
          </h3>
          <p className="text-sm mt-6">
            Join the Google Developer Student Clubs (GDSC) at GITAM University
            to attend inspiring events, collaborate on exciting projects, and
            connect with like-minded individuals in the tech community.
          </p>
          <button className="mt-6 flex gap-x-2">
            Join <Codesandbox className="w-4" />
          </button>
        </section>
        <section className="flex items-center flex-col text-center">
          <Codesandbox />
          <h3 className="font-medium mt-6">
            Engage in a Vibrant Community of Developers and Innovators
          </h3>
          <p className="text-sm mt-6">
            Join the Google Developer Student Clubs (GDSC) at GITAM University
            to attend inspiring events, collaborate on exciting projects, and
            connect with like-minded individuals in the tech community.
          </p>
          <button className="mt-6 flex gap-x-2">
            Join <Codesandbox className="w-4" />
          </button>
        </section>
        <section className="flex items-center flex-col text-center">
          <Codesandbox />
          <h3 className="font-medium mt-6">
            Engage in a Vibrant Community of Developers and Innovators
          </h3>
          <p className="text-sm mt-6">
            Join the Google Developer Student Clubs (GDSC) at GITAM University
            to attend inspiring events, collaborate on exciting projects, and
            connect with like-minded individuals in the tech community.
          </p>
          <button className="mt-6 flex gap-x-2">
            Join <Codesandbox className="w-4" />
          </button>
        </section>
      </div>
    </div>
  );
}
