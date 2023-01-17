import React from "react";
import Header from "./components/Header";
import Experience from "./components/ExpSection";
import Education from "./components/EduSection";
class App extends React.Component {
  render() {
    return (
      <>        
        <div className="cv-container bg-slate-50 grid">
          <div className="cv-content grid my-6 p-4 bg-slate-200 rounded-lg shadow-xl">
            <Header />
            <div className="border-b-2 rounded-full border-blue-400 opacity-40 w-full place-self-center my-3"></div>
            <Experience />
            <div className="border-b-2 rounded-full border-blue-400 opacity-40 w-full place-self-center my-3"></div>
            <Education />
          </div>
        </div>
      </>
    );
  }
}

export default App;
