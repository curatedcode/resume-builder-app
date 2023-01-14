import React from "react";
import DegreeCard from './DegreeCard'

class EduSection extends React.Component{
  constructor(){
    super()
    this.state = {
      initialData: JSON.parse(localStorage.getItem('cv-education')).data
    }
  }
  render(){
    return(
      <>
        <section className="mt-2 grid">
          <h2 className="place-self-center text-xl text-blue-400 mb-2">Education</h2>
          {
            Object.entries(this.state.initialData).map(degree => <DegreeCard degree={degree[1].degree} study={degree[1].study} school={degree[1].school} dateStart={degree[1].dateStart} dateEnd={degree[1].dateEnd} key={degree[0]} objectKey={degree[0]}/>)
          }
          <button className="hidden">Add Education</button>
        </section>
      </>
    )
  }
}

export default EduSection