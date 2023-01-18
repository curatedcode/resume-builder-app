import React from "react";
import { FaEdit } from 'react-icons/fa'

class DegreeCard extends React.Component{
  constructor(){
    super()
    this.state = {
      editable: false,
      initialJobsData: '',
      initialData: '',
      school: '',
      degree: '',
      study: '',
      location: '',
      dateStart: '',
      dateEnd: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    let localStorageData = JSON.parse(localStorage.getItem('cv-education'))
    const objectKey = this.props.objectKey
    this.setState({initialData: localStorageData[objectKey]})
    this.setState({initialJobsData: localStorageData})
    this.setState({school: localStorageData[objectKey].school})
    this.setState({degree: localStorageData[objectKey].degree})
    this.setState({study: localStorageData[objectKey].study})
    this.setState({location: localStorageData[objectKey].location})
    this.setState({dateStart: localStorageData[objectKey].dateStart})
    this.setState({dateEnd: localStorageData[objectKey].dateEnd})
  }
  handleChange(event){
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState({[name]:value})
  }
  reset(){
    this.setState({school: this.state.initialData.school})
    this.setState({degree: this.state.initialData.degree})
    this.setState({study: this.state.initialData.study})
    this.setState({location: this.state.initialData.location})
    this.setState({dateStart: this.state.initialData.dateStart})
    this.setState({dateEnd: this.state.initialData.dateEnd})
  }
  updateData(){
    let data = this.state.initialJobsData
    const newData = {
      school: this.state.school,
      degree: this.state.degree,
      study: this.state.study,
      location: this.state.location,
      dateStart: this.state.dateStart,
      dateEnd: this.state.dateEnd
    }
    data[this.props.objectKey] = newData
    localStorage.setItem('cv-education',JSON.stringify(data))
  }
  render(){
    return(
      <>
        <FaEdit className={`${this.state.editable ? "hidden":""} hover:cursor-pointer hover:text-blue-500 transition-colors place-self-end`} onClick={()=>{
          this.setState({editable: true})
        }}></FaEdit>
        <div className={`grid mb-4 ${this.state.editable ? 'gap-4':''}`}>
          <span className={`text-lg font-bold ${this.state.editable ? "hidden":""}`}>{this.state.school}</span>
          <div className={`${this.state.editable ? "":"hidden"} grid`}>
              <label className="font-bold mb-1" htmlFor="school">School</label>
              <input name="school" className="border-2 border-gray-300 p-2 px-4 rounded-md focus-visible:outline-blue-400" value={this.state.school} onChange={this.handleChange}></input>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.degree}</span>
          <div className={`${this.state.editable ? "":"hidden"} grid`}>
            <label className="font-bold mb-1" htmlFor="degree">Degree</label>
            <input name="degree" className="border-2 border-gray-300 p-2 px-4 rounded-md focus-visible:outline-blue-400" value={this.state.degree} onChange={this.handleChange}></input>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.study}</span>
          <div className={`${this.state.editable ? "":"hidden"} grid`}>
            <label className="font-bold mb-1" htmlFor="study">Field of study</label>
              <input name="study" className="border-2 border-gray-300 p-2 px-4 rounded-md focus-visible:outline-blue-400" value={this.state.study} onChange={this.handleChange}></input>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.location}</span>
          <div className={`${this.state.editable ? "":"hidden"} grid`}>
            <label className="font-bold mb-1" htmlFor="location">Location</label>
            <input name="location" className="border-2 border-gray-300 p-2 px-4 rounded-md focus-visible:outline-blue-400" value={this.state.location} onChange={this.handleChange}></input>
          </div>
          <div className={`flex ${this.state.editable ? 'flex-col gap-4':'opacity-50 flex-row gap-2'}`}>
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.dateStart}</span>
            <div className={`${this.state.editable ? "":"hidden"} grid`}>
              <label className="font-bold mb-1" htmlFor="dateStart">Start date</label>
              <input name="dateStart" className="border-2 border-gray-300 p-2 px-4 rounded-md focus-visible:outline-blue-400" value={this.state.dateStart} onChange={this.handleChange}></input>
            </div>
            <span className={this.state.editable ? "hidden":''}>-</span>
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.dateEnd}</span>
            <div className={`${this.state.editable ? "":"hidden"} grid`}>
              <label className="font-bold mb-1" htmlFor="dateEnd">End date</label>
              <input name="dateEnd" className="border-2 border-gray-300 p-2 px-4 rounded-md focus-visible:outline-blue-400" value={this.state.dateEnd} onChange={this.handleChange}></input>
            </div>
          </div>
        </div>
        <div>
          <div className={`${this.state.editable ? "":"hidden"} flex items-center gap-8 text-xl text-white mb-6`}>
            <button className="hover:bg-blue-600 font-bold mr-8 py-1 px-3 rounded-md bg-blue-500 transition-colors" onClick={()=>{
              this.updateData()
              this.setState({editable:false})
            }}>Save</button>
            <button className="hover:bg-blue-600 font-bold py-1 px-3 rounded-md bg-blue-500 transition-colors" onClick={()=>{
              this.reset()
              this.setState({editable:false})
            }}>Cancel</button>
          </div>
        </div>
      </>
    )
  }
}

export default DegreeCard