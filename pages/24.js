export default function twentyfour() {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="w-full h-full bg-slate-100 flex gap-4">
          <div className="w-2/3 h-full flex gap-4 flex-col">
            <div className="w-full h-1/4 bg-purple-400"></div>
            <div className="w-full h-2/4  flex gap-4">
              <div className="w-1/2 h-full bg-purple-400"></div>
              <div className="w-1/2 h-full bg-purple-400"></div>
            </div>
            <div className="w-full h-1/4 bg-purple-400"></div>
          </div>
          <div className="w-1/3 h-full bg-purple-400"></div>
        </div>
      </div>
    </>
  );
}
