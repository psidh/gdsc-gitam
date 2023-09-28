import { Codesandbox } from "react-feather";

export default function JoinGDSC() {
  return (
    <div className="py-28 px-16 w-full flex gap-x-20">
      <h2 className="text-5xl font-bold shrink-0">Join the GDSC Core Team</h2>
      <div>
        <p>
          Are you passionate about technology? Join the GDSC core team and gain
          valuable experience while making a difference in the developer
          community.
        </p>
        <button className="mt-6 px-6 py-3 bg-black rounded-lg text-white text-sm mr-4">
          Apply
        </button>
        <button className="px-6 py-3 border rounded-lg text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
}
