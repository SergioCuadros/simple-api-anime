import { Button } from "./Button";
import moods from "../assets/mood.js";

export const MoodFilter = ({selectedGenre, toggleGenre}) => {
  return (
    <>
      <h1 className="my-6 mx-auto grid lg:text-5xl text-4xl font-bold bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">
        How is your mood tonight? :)
      </h1>
      <p>This is a mood mood</p>
      <div className="grid lg:grid-cols-4 grid-cols-3 my-6 lg:gap-6 gap-4 mood-center-container">
        {Object.entries(moods).map(([mood, genre], index) => {
            return(
                <Button key={index} text={mood} className={"btn btn-outline btn-accent w-full"} 
                onClick={() => toggleGenre(mood, genre)}
                />
            )
        })}
      </div>
    </>
  );
};
