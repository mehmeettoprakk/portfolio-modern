export const Journey = () => {
  const experiences = [
    {
      id: 1,
      title: "Internship",
      timespan: "June 2024- July 2024",
      place: "2KeK Games Bilişim Teknolojileri A.Ş.",
    },
    {
      id: 2,
      place: "Balıkesir University",
      title: "Bachelor's Degree | Computer Engineering",
      timespan: "September 2021 - June 2025",
    },
  ];

  return (
    <>
      <h1 className="text-base font-medium text-primary md:text-xl">
        Experience{" "}
        <span className="block font-bold text-transparent text-4xl mt-1 lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          My Journey
        </span>
      </h1>

      <hr className="w-28 my-3 p-1 bg-gradient-to-r from-purple-500 to-red-500 border-none rounded-sm" />

      <div className="grid lg:grid-cols-2 my-4 gap-4">
        {experiences.map((experience) => (
          <div
            key={experience.place}
            className="bg-tertiary border border-borderColor rounded-md p-4 transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:shadow-lg cursor-pointer group">
            <p className="text-justify font-bold text-white text-lg col-span-2">
              {experience.place}
              <span className="block font-normal text-slate-200 mt-1 text-base group-hover:text-white">
                {experience.title}
              </span>
              <span className="block font-normal text-primary mt-1 text-sm group-hover:text-gray-200">
                {experience.timespan}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
