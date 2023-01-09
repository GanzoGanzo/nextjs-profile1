export default function One() {
  return (
    <>
      <div className="w-screen h-screen flex gap-3">
        <div className="w-1/3 h-full bg-purple-400"></div>
        <div className="w-full h-full flex gap-3 flex-col">
          <div className="w-full h-40 bg-purple-400"></div>
          <div className="w-full h-full flex gap-3">
            <div className="w-1/2 h-full bg-purple-400"></div>
            <div className="w-1/2 h-full bg-purple-400"></div>
          </div>
        </div>
      </div>
    </>
  );
}
