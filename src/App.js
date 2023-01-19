import React from "react";
import Header from "./components/Header";
import Experience from "./components/ExpSection";
import Education from "./components/EduSection";
import Skills from "./components/SkillsSection"
class App extends React.Component {
  render() {
    return (
      <>    
        <div className="cv-container bg-slate-50 grid text-lg md:bg-slate-300 md:pb-4 print:text-sm min-h-screen print:min-h-fit">
          <button className="hover:bg-blue-600 font-bold py-1 px-4 my-4 w-max rounded-md bg-blue-500 place-self-center transition-colors text-xl text-white print:hidden" onClick={()=>window.print()}>Print</button>   
          <div className="cv-content grid p-4 bg-slate-200 rounded-lg shadow-xl md:w-10/12 md:place-self-center lg:w-2/3 print:shadow-none max-w-6xl">
            <Header />
            <div className="border-b-2 mt-2 rounded-full border-blue-400 opacity-40 w-full place-self-center"></div>
            <Experience />
            <div className="border-b-2 mt-2 rounded-full border-blue-400 opacity-40 w-full place-self-center"></div>
            <Skills />
            <div className="border-b-2 mt-2 rounded-full border-blue-400 opacity-40 w-full place-self-center"></div>
            <Education />
          </div>
        </div>
      </>
    );
  }
}

export default App;
