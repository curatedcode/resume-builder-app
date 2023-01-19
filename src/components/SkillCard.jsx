import React from "react";
import { FaEdit } from 'react-icons/fa'


class SkillCard extends React.Component{
  constructor(){
    super()
    this.state = {
      editable: false,
      initialJobsData: '',
      initialData: '',
      skill: '',
      years: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    let localStorageData = JSON.parse(localStorage.getItem('cv-skills'))
    const objectKey = this.props.objectKey
    this.setState({initialData: localStorageData[objectKey]})
    this.setState({initialJobsData: localStorageData})
    this.setState({skill: localStorageData[objectKey].skill})
    this.setState({years: localStorageData[objectKey].years})
  }
  handleChange(event){
    const target = event.target
    const name = target.name
    let value = target.value
    if(name === 'years' && String(value).length > 0){
      value = Math.max(1,Math.min(99,Number(value)))
    }
    this.setState({[name]:value})
  }
  reset(){
    this.setState({skill: this.state.initialData.skill})
    this.setState({years: this.state.initialData.years})
  }
  updateData(){
    let data = this.state.initialJobsData
    const newData = {
      skill: this.state.skill,
      years: this.state.years
    }
    data[this.props.objectKey] = newData
    localStorage.setItem('cv-skills',JSON.stringify(data))
  }
  render(){
    return(
      <>
        <FaEdit className={`${this.state.editable ? "hidden":""} hover:cursor-pointer hover:text-blue-500 transition-colors place-self-end print:hidden text-lg`} onClick={()=>{
          this.setState({editable: true})
        }}></FaEdit>
        <div className={`gap-2 ${this.state.editable ? 'gap-4 grid':'flex'}`}>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.skill}</span>
          <div className={`${this.state.editable ? "":"hidden"} grid`}>
            <label className="font-bold mb-1" htmlFor="skill">Skill</label>
            <input name="skill" className="border-2 border-gray-300 p-2 px-4 rounded-md  focus-visible:outline-blue-400" value={this.state.skill} onChange={this.handleChange}></input>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>-</span>
          {
            this.state.years > 1 ? (
              <span className={`${this.state.editable ? "hidden":""}`}>{this.state.years} years</span>
            ):(
              <span className={`${this.state.editable ? "hidden":""}`}>{this.state.years} year</span>
            )
          }

          <div className={`${this.state.editable ? "":"hidden"} grid`}>
            <label className="font-bold mb-1" htmlFor="years">Years of experience</label>
            <input type={'number'} name="years" className="border-2 border-gray-300 p-2 px-4 rounded-md  focus-visible:outline-blue-400" value={this.state.years} onChange={this.handleChange}></input>
          </div>
        </div>
        <div>
          <div className={`${this.state.editable ? "":"hidden"} flex justify-center items-center gap-8 text-xl text-white my-4`}>
            <button className="hover:bg-blue-600 font-bold py-1 px-4 rounded-md bg-blue-500 transition-colors" onClick={()=>{
              this.updateData()
              this.setState({editable:false})
            }}>Save</button>
            <button className="hover:bg-blue-600 font-bold py-1 px-4 rounded-md bg-blue-500 transition-colors" onClick={()=>{
              this.reset()
              this.setState({editable:false})
            }}>Cancel</button>
          </div>
        </div>
      </>
    )
  }
}

export default SkillCard