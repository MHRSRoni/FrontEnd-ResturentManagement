export default function CardSalton() {
  return (
    <div className="w-full flex flex-col gap-2 mb-4 animate-pulse">
      <div className="relative w-full h-48 flex-none duration-300 hover:scale-[1.03]">
        <div className="aspect-video bg-slate-200"></div>
      </div>

      <div className="flex flex-col w-full grow space-y-2">
        <p className="text-slate-200 text-[8px] bg-slate-200">Loading...</p>
        <span className="text-slate-200 text-[8px] mt-2 bg-slate-200">
          Loading...
        </span>
        <p className="text-slate-200 text-[8px] bg-slate-200">Loading...</p>
        <p className="text-slate-200 text-[8px] bg-slate-200">Loading...</p>
      </div>
    </div>
  );
}
