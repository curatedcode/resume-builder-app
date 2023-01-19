import React from "react";
import uuid from "react-uuid";
import SkillCard from './SkillCard'
if(localStorage.getItem('cv-skills')===null){
  localStorage.setItem('cv-skills',JSON.stringify([
    {skill: 'Skill', years: '1'}
  ]))
} 

class SkillsSection extends React.Component{
  constructor(){
    super()
    this.state = {
      initialData: JSON.parse(localStorage.getItem('cv-skills'))
    }
  }
  deleteCard(index){
    const data = this.state.initialData.filter(obj => obj !== this.state.initialData[index])
    this.setState({initialData: data})
    localStorage.setItem('cv-skills',JSON.stringify(data))
  }
  render(){
    return(
      <>
        <section className="grid">
          <h2 className="place-self-center text-lg text-blue-400">Skills</h2>
          <div className="border-b-2 mb-2 rounded-full border-b-blue-400 opacity-40 w-full place-self-center"></div>
          <div className="grid my-2">
          {
            this.state.initialData.map((skill) => {return<div className="grid">
              <SkillCard key={uuid()} objectKey={this.state.initialData.findIndex((obj)=>obj.skill === skill.skill)}/>
              <button key={uuid()} onClick={()=>this.deleteCard(this.state.initialData.findIndex((obj)=>obj.skill === skill.skill))} className="text-blue-400 hover:text-blue-500 transition-colors place-self-start print:hidden">- Remove</button>
              </div>
            })
          }
          </div>
          <button onClick={()=>{
            const fetchData = JSON.parse(localStorage.getItem('cv-skills'))
            this.setState({initialData: fetchData})
            const data = fetchData
            const defaultData = {
              skill: 'Skill',
              years: 'Years of Experience'
            }
            data.push(defaultData)
            localStorage.setItem('cv-skills',JSON.stringify(data))
            this.setState({initialData: data})
          }} className="text-blue-400 hover:text-blue-600 place-self-start transition-colors my-3 print:hidden">+ Add Skills</button>
        </section>
      </>
    )
  }
}

export default SkillsSection