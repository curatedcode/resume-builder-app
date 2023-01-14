import React from "react";
import JobCard from './JobCard'

class ExpSection extends React.Component{
  constructor(){
    super()
    this.state = {
      initialData: JSON.parse(localStorage.getItem('cv-experience')).data
    }
  }
  render(){
    return(
      <>
        <section className="mt-2 grid">
          <h2 className="place-self-center text-xl text-blue-400 mb-2">Professional Experience</h2>
          {
            Object.entries(this.state.initialData).map((job) => <JobCard title={job[1].title} company={job[1].company} location={job[1].location} dateStart={job[1].dateStart} dateEnd={job[1].dateEnd} details={job[1].details} key={job[0]} objectKey={job[0]}/>)
          }
          <button className="hidden">Add A Job</button>
        </section>
      </>
    )
  }
}

export default ExpSection