import React from "react";
import uuid from "react-uuid";
import JobCard from './JobCard'
if(localStorage.getItem('cv-experience')===null){
  localStorage.setItem('cv-experience',JSON.stringify([
    {
      title: "Title",
      company: "Company",
      location: "Location",
      dateStart: "01/2000",
      dateEnd: "01/2000",
      quillData: '<p>Summary<p>',
      presentJob: false
    }
]))
}

class ExpSection extends React.Component{
  constructor(){
    super()
    this.state = {
      initialData: JSON.parse(localStorage.getItem('cv-experience'))
    }
  }
  deleteCard(index){
    const data = this.state.initialData.filter(obj => obj !== this.state.initialData[index])
    this.setState({initialData: data})
    localStorage.setItem('cv-experience',JSON.stringify(data))
  }
  render(){
    return(
      <>
        <section className="grid">
          <h2 className="place-self-center text-lg text-blue-400">Professional Experience</h2>
          <div className="border-b-2 rounded-full border-b-blue-400 opacity-40 w-full place-self-center"></div>
          <div className="grid gap-2 my-2">
          {
            this.state.initialData.map((job) => {return<div className="grid">
              <JobCard key={uuid()} objectKey={this.state.initialData.findIndex((obj)=>obj.title === job.title)}/>
              <button key={uuid()} onClick={()=>this.deleteCard(this.state.initialData.findIndex((obj)=>obj.title === job.title))} className="text-blue-400 hover:text-blue-500 transition-colors place-self-start print:hidden">- Remove</button>
              </div>
            })
          }
          </div>
          <button onClick={()=>{
            const fetchData = JSON.parse(localStorage.getItem('cv-experience'))
            this.setState({initialData: fetchData})
            const data = fetchData
            const defaultData ={
              title: "Title",
              company: "Company",
              location: "Location",
              dateStart: "01/2000",
              dateEnd: "01/2000",
              quillData: '<p>Summary<p>',
              presentJob: false
            }
            data.push(defaultData)
            localStorage.setItem('cv-experience',JSON.stringify(data))
            this.setState({initialData: data})
          }} className="text-blue-400 hover:text-blue-600 place-self-start transition-colors my-3 print:hidden">+ Add Work Experience</button>
        </section>
      </>
    )
  }
}

export default ExpSection