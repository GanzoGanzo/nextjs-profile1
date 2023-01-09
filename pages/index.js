export default function MyProfile() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-tr from-indigo-400 to-blue-200">
        <div className="w-[80%] h-full bg-slate-50 bg-opacity-10 backdrop-blur-md rounded-lg top-[2%] ml-[10%] flex border border-slate-50/40  ">
          <div className="w-1/3 h-[10%] text-s flex justify-between ml-[60%]">
            <div className="w-[28%] h-[35%] absolute mt-[1%] ml-[-50%] text-7xl text-slate-600 flex justify-start animate-pulse">
              This is My First Profile Web
            </div>
            <div className="w-[28%] h-[35%] absolute mt-[18%] ml-[-50%] text-lg  text-slate-600 flex justify-start">
              My name is Ganzorig.My name is Ganzorig.My name is Ganzorig.My
              name is Ganzorig.My name is Ganzorig.
            </div>
            <div className="z-0 bg-opacity-10  text-slate-600 hover:text-lg hover:text-slate-400">
              About
            </div>
            <div className="z-0 bg-opacity-10  text-slate-600 hover:text-lg hover:text-slate-400">
              CV
            </div>
            <div className="z-0 bg-opacity-10  text-slate-600 hover:text-lg hover:text-slate-400">
              Language
            </div>
            <div className="z-0 bg-opacity-10  text-slate-600 hover:text-lg hover:text-slate-400">
              Hobby
            </div>
            <button className="w-[15%] h-[40%] bg-sky-900 bg-opacity-20 dark:md:hover:bg-slate-500 backdrop-blur-md rounded  text-slate-600 border border-slate-50/40 text-xs">
              LogIn
            </button>
          </div>
          <div className="w-[33%] h-[53%]  absolute  mt-[5%] ml-[60%] rounded-lg flex">
            <img
              className="relative w-full h-full z-10 object-fill -left-0 -top-0 animate-bounce "
              src="mario.png"
            />
          </div>
          <div className="w-[30%] h-[6%] bg-slate-200 absolute  mt-[26%] ml-[10%] rounded-lg flex">
            <div className="w-3/4 flex border border-black-50"></div>
            <div className="w-3/4"></div>
            <div className="w-full bg-teal-300 rounded-lg flex justify-center items-center text-lg">
              Search
            </div>
          </div>
          <div className="relative w-[80%] h-[12%] bg-sky-900 bg-opacity-30 backdrop-blur-md absolute  mt-[35%] ml-[-100%] rounded-lg flex"></div>
          <div className="w-1/3 h-[10%] text-s ml-[-40%] mt-[50%]">
            <div className="w-[28%] h-[10%] absolute text-3xl text-slate-600 flex justify-center items-center animate-pulse">
              Latest Job Opportunity
            </div>
            <div className="w-[38%] h-[12%] mt-[3%] ml-[-2.5%] absolute text-md text slate-500 flex justify-start items-center">
              Find a job you love, research the fastest-growing companies
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
