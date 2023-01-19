import React from "react";
import uuid from "react-uuid";
import DegreeCard from './DegreeCard'
if(localStorage.getItem('cv-education')===null){
  localStorage.setItem('cv-education', JSON.stringify([
    {
      school: "School",
      degree: "Degree",
      study: "Study",
      location: "Location",
      dateStart: "01/2000",
      dateEnd: "01/2000",
      presentSchool: false
    }
  ]))
}

class EduSection extends React.Component{
  constructor(){
    super()
    this.state = {
      initialData: JSON.parse(localStorage.getItem('cv-education'))
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
          <h2 className="place-self-center text-lg text-blue-400">Education</h2>
          <div className="border-b-2 mb-2 rounded-full border-blue-400 opacity-40 w-full place-self-center"></div>
          <div className="grid gap-2 my-2">
          {
            this.state.initialData.map(degree => {return<div className="grid">
              <DegreeCard key={uuid()} objectKey={this.state.initialData.findIndex((obj)=>obj.degree === degree.degree)}/>
              <button key={uuid()} onClick={()=>this.deleteCard(this.state.initialData.findIndex((obj)=>obj.degree === degree.degree))} className="text-blue-400 hover:text-blue-500 transition-colors place-self-start print:hidden">- Remove</button>
              </div>
            })
          }
          </div>
          <button onClick={()=>{
            const fetchData = JSON.parse(localStorage.getItem('cv-education'))
            this.setState({initialData: fetchData})
            const data = fetchData
            const defaultData = {
              school: "School",
              degree: "Degree",
              study: "Study",
              location: "Location",
              dateStart: "01/2000",
              dateEnd: "01/2000",
              presentSchool: false
            }
            data.push(defaultData)
            localStorage.setItem('cv-education',JSON.stringify(data))
            this.setState({initialData: data})
          }} className="text-blue-400 hover:text-blue-600 place-self-start transition-colors print:hidden my-3">+ Add Education</button>
        </section>
      </>
    )
  }
}

export default EduSection