export default function Six() {
  return (
    <>
      <div className="w-screen h-screen flex gap-3">
        <div className="w-full h-full flex gap-3 flex-col">
          <div className="w-full h-1/2 bg-purple-400 flex"></div>
          <div className="w-full h-full flex gap-3">
            <div className="w-1/2 h-full flex gap-3 flex-col">
              <div className="w-full h-1/2 bg-purple-400"></div>
              <div className="w-full h-1/2 bg-purple-400"></div>
            </div>
            <div className="w-1/2 h-full flex gap-3 flex-col">
              <div className="w-full h-1/2 bg-purple-400"></div>
              <div className="w-full h-1/2 bg-purple-400"></div>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full flex gap-3 flex-col">
          <div className="w-full h-1/3 bg-purple-400"></div>
          <div className="w-full h-1/3 bg-purple-400"></div>
          <div className="w-full h-1/3 bg-purple-400"></div>
        </div>
      </div>
      {/* <div className="w-screen h-screen flex gap-3 flex-col">
        <div className="w-full h-full">
          <div className="w-full h-1/3 flex gap-3">
            <div className="w-full h-1/3 bg-purple-400"></div>
            <div className="w-1/2 h-1/3 bg-purple-400"></div>
          </div>
          <div className="w-full h-full flex gap-3">
            <div className="w-1/2 h-full bg-purple-500"></div>
            <div className="w-1/2 h-full bg-purple-500"></div>
          </div>
        </div>
      </div> */}
    </>
  );
}
