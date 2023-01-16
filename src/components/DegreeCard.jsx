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
    let localStorageData = JSON.parse(localStorage.getItem('cv-education')).data
    this.setState({initialData: localStorageData[this.props.objectKey]})
    this.setState({initialJobsData: localStorageData})
    this.setState({school: localStorageData[this.props.objectKey].school})
    this.setState({degree: localStorageData[this.props.objectKey].degree})
    this.setState({study: localStorageData[this.props.objectKey].study})
    this.setState({location: localStorageData[this.props.objectKey].location})
    this.setState({dateStart: localStorageData[this.props.objectKey].dateStart})
    this.setState({dateEnd: localStorageData[this.props.objectKey].dateEnd})
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
    localStorage.setItem('cv-education',JSON.stringify({data}))
  }
  render(){
    return(
      <>
        <div>
          <FaEdit className={`${this.state.editable ? "hidden":""} float-right`} onClick={()=>{
            this.setState({editable: true})
          }}>Edit</FaEdit>
          <div className='flex justify-center gap-8 text-xl text-white mb-2'>
            <button className={`${this.state.editable ? "":"hidden"} hover:bg-blue-600 py-1 px-2 rounded-md bg-blue-500`} onClick={()=>{
              this.updateData()
              this.setState({editable:false})
            }}>Save</button>
            <button className={`${this.state.editable ? "":"hidden"} hover:bg-blue-600 py-1 px-2 rounded-md bg-blue-500`} onClick={()=>{
              this.reset()
              this.setState({editable:false})
            }}>Cancel</button>
          </div>
        </div>
        <div className="grid mb-4 gap-2">
          <span className={`text-lg font-bold ${this.state.editable ? "hidden":""}`}>{this.state.school}</span>
          <div className={`${this.state.editable ? "":"hidden"}`}>
              <input name="school" className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" value={this.state.school} onChange={this.handleChange}></input>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.degree}</span>
          <div className={`${this.state.editable ? "":"hidden"}`}>
              <input name="degree" className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" value={this.state.degree} onChange={this.handleChange}></input>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.study}</span>
          <div className={`${this.state.editable ? "":"hidden"}`}>
              <input name="study" className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" value={this.state.study} onChange={this.handleChange}></input>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.location}</span>
          <div className={`${this.state.editable ? "":"hidden"}`}>
              <input name="location" className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" value={this.state.location} onChange={this.handleChange}></input>
          </div>
          <div className="flex gap-2 opacity-50">
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.dateStart}</span>
            <div className={`${this.state.editable ? "":"hidden"}`}>
              <input name="dateStart" className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" value={this.state.dateStart} onChange={this.handleChange}></input>
            </div>
            <span className={`${this.state.editable ? "hidden":""}`}>to</span>
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.dateEnd}</span>
            <div className={`${this.state.editable ? "":"hidden"}`}>
              <input name="dateEnd" className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" value={this.state.dateEnd} onChange={this.handleChange}></input>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default DegreeCard