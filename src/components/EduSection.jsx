import React from "react";
import DegreeCard from './DegreeCard'

class EduSection extends React.Component{
  constructor(){
    super()
    this.state = {
      initialData: JSON.parse(localStorage.getItem('cv-education'))
    }
  }
  render(){
    return(
      <>
        <section className="mt-2 grid">
          <h2 className="place-self-center text-xl text-blue-400 mb-2">Education</h2>
          {
            this.state.initialData.map(degree => <DegreeCard key={degree.degree} objectKey={this.state.initialData.findIndex((obj)=>obj.degree === degree.degree)}/>)
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
          }} className="">Add Education</button>
        </section>
      </>
    )
  }
}

export default EduSection