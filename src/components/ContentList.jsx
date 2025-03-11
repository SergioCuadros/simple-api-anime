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
            <div className="badge badge-secondary">Thats it!</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  );
};
