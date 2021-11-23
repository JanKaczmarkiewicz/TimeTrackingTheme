import { useState } from "react";
import EditTab from "./EditTab";

const ActiveButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => (
  <button
    className="flex flex-1 justify-center bg-gray text-black p-2"
    {...props}
  />
);

const InactiveButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => <button className="flex flex-1 justify-center p-2" {...props} />;

const App = () => {
  const [isTrack, setIsTrack] = useState(false);

  const TrackButton = isTrack ? ActiveButton : InactiveButton;
  const EditButton = isTrack ? InactiveButton : ActiveButton;

  return (
    <div className="flex flex-col w-1/2 m-auto gap-8">
      <h2 className="text-center text-2xl mt-4">4h 30m left</h2>

      <div className="flex  rounded-lg border-2 border-gray">
        <EditButton onClick={() => setIsTrack(false)}>Edit</EditButton>
        <TrackButton onClick={() => setIsTrack(true)}>Track</TrackButton>
      </div>

      {isTrack ? <></> : <EditTab />}
    </div>
  );
};

export default App;
