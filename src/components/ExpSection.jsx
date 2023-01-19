import React from "react";
import uuid from "react-uuid";
import JobCard from './JobCard'

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
    localStorage.setItem('cv-education',JSON.stringify(data))
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
          }} className="text-blue-400 hover:text-blue-600 place-self-start transition-colors my-2 print:hidden">+ Add Work Experience</button>
        </section>
      </>
    )
  }
}

export default ExpSection