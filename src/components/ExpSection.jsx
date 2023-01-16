import React from "react";
import JobCard from './JobCard'

class ExpSection extends React.Component{
  constructor(){
    super()
    this.state = {
      initialData: JSON.parse(localStorage.getItem('cv-experience'))
    }
  }
  render(){
    return(
      <>
        <section className="mt-2 grid">
          <h2 className="place-self-center text-xl text-blue-400 mb-2">Professional Experience</h2>
          {
            this.state.initialData.map((job) => <JobCard key={job.title} objectKey={this.state.initialData.findIndex((obj)=>obj.title === job.title)}/>)
          }
          <button onClick={()=>{
            const data = this.state.initialData
            const defaultData = {
              title: 'Position',
              company: 'Company Name',
              location: 'Location',
              dateStart: '01/2023',
              dateEnd: '01/2023',
              quillData: 'Description'
            }
            data.push(defaultData)
            localStorage.setItem('cv-experience',JSON.stringify(data))
            this.setState({initialData: data})
          }} className="">Add A Job</button>
        </section>
      </>
    )
  }
}

export default ExpSection