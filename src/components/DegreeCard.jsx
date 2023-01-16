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
  updateData(){
    let localData = this.state.initialJobsData
    const newData = {
      school: this.props.school,
      degree: this.props.degree,
      study: this.props.study,
      location: this.props.location,
      dateStart: this.props.dateStart,
      dateEnd: this.props.dateEnd
    }
    if(JSON.stringify(this.state.initialData) !== JSON.stringify(newData)){
      localData[this.props.objectKey] = newData
      localStorage.setItem('cv-education',{data:{
        localData
      }})
    }
  }
  render(){
    return(
      <>
        <div>
          <FaEdit className={`${this.state.editable ? "hidden":""} float-right`} onClick={()=>{
            this.setState({editable: true})
          }}>Edit</FaEdit>
          <button className={this.state.editable ? "":"hidden"} onClick={()=>{
            this.updateData()
            this.setState({editable:false})
          }}>Save</button>
        </div>
        <div className="grid mb-4 gap-2">
          <span className={`text-lg font-bold ${this.state.editable ? "hidden":""}`}>{this.state.school}</span>
          <div className={`${this.state.editable ? "":"hidden"}`}>
              <input className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" value={this.state.school} onChange={e=>this.setState({school: e.target.value})}></input>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.degree}</span>
          <div className={`${this.state.editable ? "":"hidden"}`}>
              <input className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" value={this.state.degree} onChange={e=>this.setState({degree: e.target.value})}></input>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.study}</span>
          <div className={`${this.state.editable ? "":"hidden"}`}>
              <input className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" value={this.state.study} onChange={e=>this.setState({study: e.target.value})}></input>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.location}</span>
          <div className={`${this.state.editable ? "":"hidden"}`}>
              <input className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" value={this.state.location} onChange={e=>this.setState({location: e.target.value})}></input>
          </div>
          <div className="flex gap-2 opacity-50">
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.dateStart}</span>
            <div className={`${this.state.editable ? "":"hidden"}`}>
              <input className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" value={this.state.dateStart} onChange={e=>this.setState({dateStart: e.target.value})}></input>
            </div>
            <span className={`${this.state.editable ? "hidden":""}`}>to</span>
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.dateEnd}</span>
            <div className={`${this.state.editable ? "":"hidden"}`}>
              <input className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" value={this.state.dateEnd} onChange={e=>this.setState({dateEnd: e.target.value})}></input>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default DegreeCard