import React from "react";
import Header from "./components/Header";
import Experience from "./components/ExpSection";
import Education from "./components/EduSection";
class App extends React.Component {
  render() {
    return (
      <>        
        <div className="cv-container bg-slate-50 grid">
          <div className="cv-content grid my-6 p-4 bg-slate-200 rounded-lg shadow-xl w-11/12 place-self-center">
            <Header />
            <Experience />
            <div className="border-b-2 rounded-full border-black border-opacity-10 w-28 place-self-center mb-2"></div>
            <Education />
          </div>
        </div>
      </>
    );
  }
}

export default App;
