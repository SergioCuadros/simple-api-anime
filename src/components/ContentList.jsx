import { Button } from "./Button";

export const ContentList = () => {
  return (
    <>
      <div className="center-container card bg-slate-100/5 w-96 shadow-sm">
        <figure className="aspect-[16/9]">
        <iframe className="w-full h-full" width="1044" height="587" src="https://www.youtube.com/embed/XeR_SGBUjTs" title="Build an Anime Website with MyAnimeList API using React Tailwind Axios Postman | HOW TO REST API" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold cursor-pointer">
            Anime Title!
            <div className="badge badge-outline badge-secondary">Thats it!</div>
            <div className="badge badge-outline badge-secondary">Thats it!</div>
            <div className="badge badge-outline badge-secondary">Thats it!</div>
            <div className="badge badge-outline badge-secondary">Thats it!</div>
          </h2>
          <p className="text-lg font-thin text-left"> 
              2009 · 64 ep · ⭐9.1 · 🏆top 3
          </p>
          <p className="mt-3 font-thin text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ducimus exercitationem nostrum corrupti molestias praesentium adipisci commodi, sequi vitae perferendis quam ea, quos nulla in. Ex, facilis quas. Earum, ab. </p>
          <div className="flex justify-between">
            <Button text={"Back"} className={"btn btn-outline btn-accent"}/>
            <Button text={"Hide"} className={"btn btn-outline btn-accent"}/>
            <Button text={"Next"} className={"btn btn-outline btn-accent"}/>
          </div>
        </div>
      </div>
    </>
  );
};
