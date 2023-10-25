import { Codesandbox } from "react-feather";

export default function JoinGDSC() {
  return (
    <div className="py-28 w-full px-16 xl:flex grid gap-x-20">
      <h2 className="md:text-6xl text-4xl font-bold shrink-0 mb-4 text-center">Join the GDSC Core Team</h2>
      <div>
        <p className="my-2">
          Are you passionate about technology? Join the GDSC core team and gain
          valuable experience while making a difference in the developer
          community.
        </p>
        <button className="my-4 px-6 py-3 bg-black 
        hover:bg-gray-300 hover:text-black rounded-lg text-white text-sm mx-2
        transform duration-300">
          Apply
        </button>
        <button className="px-6 py-3 border rounded-lg text-sm mx-2
        hover:bg-gray-100 transform duration-300">
          Learn More
        </button>
      </div>
    </div>
  )
}

