export const Status = () => {
  return (
    <div className="mb-6 grid w-full grid-cols-2 gap-0 border shadow-lg border-borderColor bg-gradient-to-r from-black via-gray-900 to-black p-6 text-primary lg:max-w-lg  rounded-md">
      <div className="grid grid-cols-3">
        <div className="col-span-1 flex items-center justify-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          14
        </div>
        <div className="col-span-2">
          <p className="text-xs lg:text-base text-slate-300"> Technologies</p>
          <p className="text-xs lg:text-base text-slate-300"> Used</p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-1 flex items-center justify-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          7
        </div>
        <div className="col-span-2">
          <p className="text-xs lg:text-base text-slate-300"> Projects</p>
          <p className="text-xs lg:text-base text-slate-300"> Completed</p>
        </div>
      </div>
    </div>
  );
};
