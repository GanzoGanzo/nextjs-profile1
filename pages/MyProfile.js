export default function One() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-tr from-teal-900 to-sky-900">
        <div className="w-[96%] h-[90%] bg-slate-50 bg-opacity-10 backdrop-blur-md rounded-lg top-[2%] ml-[2%] flex border border-slate-50/40  ">
          <div className="absolute z-0 w-24 h-24 top-[1%] left-[5%] text-fuchsia-100 text-2xl hover:text-3xl">
            NeoNFT
          </div>
          <div className="text-7xl text-fuchsia-100 hover:text-8xl">
            <div className="absolute z-0 w-24 h-24 top-[10%] left-[5%]">
              Collect
            </div>
            <div className="absolute z-0 w-96 h-24 top-[17%] left-[15%]">
              and Sell
            </div>
            <div className="absolute z-0 w-[110] h-24 top-[26%] left-[5%]">
              rare NTFs
            </div>
          </div>
          <div className="text-s">
            <div className="absolute z-0 w-15.5 h-5 top-[1%] left-[35%]  bg-opacity-10 text-fuchsia-100 hover:text-lg hover:text-slate-400">
              Discover
            </div>
            <div className="absolute z-0 w-15.5 h-5 top-[1%] left-[47%] bg-opacity-10 text-fuchsia-100 hover:text-lg hover:text-slate-400">
              Collection
            </div>
            <div className="absolute z-0 w-24 h-24 top-[1%] left-[60%] bg-opacity-10 text-fuchsia-100 hover:text-lg hover:text-slate-400">
              Artist
            </div>
            <div className="absolute z-0 w-24 h-24 top-[1%] left-[69%] bg-opacity-10 text-fuchsia-100 hover:text-lg hover:text-slate-400">
              Community
            </div>
          </div>

          {/* <button className="bg-slate-50 bg-opacity-10 backdrop-blur-md rounded text-slate-50 w-[40%] py-1">
            Message
          </button> */}

          <div className="w-[55%] h-[55%] bg-slate-10 bg-opacity-10 relative text-fuchsia-100 backdrop-blur-md border border-slate-50/40 mt-[20%] ml-[10%]">
            <div className="w-[50%] h-[15%] mt-[53%] ml-[-10%] text-xl text-slate-200 flex justify-center">
              Super VR Glass
            </div>
            <img
              className="absolute w-[100%] h-[120%] z-10 object-fill -left-0 -top-20"
              src="back.webp"
            />
          </div>
          <div className="w-[25%] h-[55%] bg-slate-20 bg-opacity-10 text-fuchsia-100 backdrop-blur-md border border-slate-50/40 mt-[10%] ml-[10%]">
            <img
              className="absolute w-full h-full -z-10 object-cover left-0 top-0"
              src="avatar.webp"
            />
          </div>
          <div className="w-[10%] h-[3%] bg-slate-50 bg-opacity-10 text-fuchsia-100 backdrop-blur-md border border-slate-50/40 mt-[15%] ml-[-27%] flex justify-center">
            1.8 ETH
          </div>
          <div className="w-[10%] h-[3%] bg-slate-50 bg-opacity-10 text-fuchsia-100 backdrop-blur-md border border-slate-50/40 mt-[20%] ml-[9%] flex justify-center">
            3.9 ETH
          </div>
          <div className="w-[10%] h-[3%] bg-slate-50 bg-opacity-10 text-fuchsia-100 backdrop-blur-md border border-slate-50/40 mt-[30%] ml-[-8%] flex justify-center">
            2.5 ETH
          </div>
          <button className="w-[15%] h-[4%] bg-slate-50 bg-opacity-10 dark:md:hover:bg-slate-500 backdrop-blur-md rounded text-fuchsia-100 border border-slate-50/40 mt-[1%] ml-[-15%] text-xs">
            Connect Wallet
          </button>
          <a href="https://www.facebook.com/" target="_blank">
            <img className="w-7 h-7" src="fb.png" />
          </a>
        </div>
        <div></div>
      </div>
    </>
  );
}
