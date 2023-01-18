import React from "react";
import uuid from "react-uuid";
import DegreeCard from './DegreeCard'

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
          <h2 className="place-self-center text-xl text-blue-400">Education</h2>
          <div className="border-b-2 rounded-full border-blue-400 opacity-40 w-full place-self-center my-3"></div>
          {
            this.state.initialData.map(degree => {return<>
              <DegreeCard key={uuid()} objectKey={this.state.initialData.findIndex((obj)=>obj.degree === degree.degree)}/>
              <button key={uuid()} onClick={()=>this.deleteCard(this.state.initialData.findIndex((obj)=>obj.degree === degree.degree))} className="text-blue-400 hover:text-blue-500 transition-colors place-self-start -mt-4 mb-4">- Remove</button>
              </>
            })
          }
          <button onClick={()=>{
            const data = this.state.initialData
            const defaultData = {
              school: 'School',
              degree: 'Degree',
              study: 'Field Of Study',
              location: 'Location',
              dateStart: '01/2023',
              dateEnd: '01/2023'
            }
            data.push(defaultData)
            localStorage.setItem('cv-education',JSON.stringify(data))
            this.setState({initialData: data})
          }} className="text-blue-400 hover:text-blue-600 place-self-start transition-colors">+ Add Education</button>
        </section>
      </>
    )
  }
}

export default EduSection