import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { FaEdit } from 'react-icons/fa'
const parse = require('html-react-parser')


class JobCard extends React.Component{
  constructor(){
    super()
    this.state = {
      editable: false,
      initialJobsData: '',
      initialData: '',
      title: '',
      company: '',
      location: '',
      dateStart: '',
      dateEnd: '',
      quillData: '',
      newTitle: '',
      newCompany: '',
      newLocation: '',
      newDateStart: '',
      newDateEnd: '',
      newQuillData: ''
    }
  }

  componentDidMount(){
    let localStorageData = JSON.parse(localStorage.getItem('cv-experience')).data
    const objectKey = this.props.objectKey
    this.setState({initialData: localStorageData[objectKey]})
    this.setState({initialJobsData: localStorageData})
    this.setState({title: localStorageData[objectKey].title})
    this.setState({company: localStorageData[objectKey].company})
    this.setState({location: localStorageData[objectKey].location})
    this.setState({dateStart: localStorageData[objectKey].dateStart})
    this.setState({dateEnd: localStorageData[objectKey].dateEnd})
    this.setState({quillData: localStorageData[objectKey].quillData})
  }
  handleChange(event){
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState({[name]:value})
  }
  updateData(){
    let localData = this.state.initialJobsData
    const newData = {
      title: this.props.newTitle,
      company: this.props.newCompany,
      location: this.props.newLocation,
      dateStart: this.props.newDateStart,
      dateEnd: this.props.newDateEnd,
      quillData: this.props.newQuillData,
    }
    localData[this.props.objectKey] = newData
    console.log(localData)
    localStorage.setItem('cv-experience',{data:{localData}})
    if(JSON.stringify(this.state.initialData) !== JSON.stringify(newData)){

    }
  }
  render(){
    const quillOptions = {
      toolbar:[
        ['bold','italic'],
        [{'list':'ordered'},{'list':'bullet'}]
      ]
    }
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
              this.setState({editable:false})
            }}>Cancel</button>
          </div>
        </div>
        <div className="grid mb-4 gap-2">
          <span className={`font-bold text-lg ${this.state.editable ? "hidden":""}`}>{this.state.title}</span>
          <div className={`${this.state.editable ? "":"hidden"}`}>
              <input name="newTitle" className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" defaultValue={this.state.title} onChange={this.handleChange}></input>
          </div>
          <div className="opacity-50 flex gap-2">
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.dateStart}</span>
            <div className={`${this.state.editable ? "":"hidden"}`}>
              <input name="newDateStart" className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" defaultValue={this.state.dateStart} onChange={this.handleChange}></input>
            </div>
            <span>to</span>
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.dateEnd}</span>
            <div className={`${this.state.editable ? "":"hidden"}`}>
              <input name="newDateEnd" className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" defaultValue={this.state.dateEnd} onChange={this.handleChange}></input>
            </div>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.company}</span>
          <div className={`${this.state.editable ? "":"hidden"}`}>
            <input name="newCompany" className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" defaultValue={this.state.company} onChange={this.handleChange}></input>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.location}</span>
          <div className={`${this.state.editable ? "":"hidden"}`}>
            <input name="newLocation" className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" defaultValue={this.state.location} onChange={this.handleChange}></input>
          </div>
          <div className={`${this.state.editable ? "hidden":""} prose prose-invert text-inherit`}>
            {
              parse(this.state.quillData)
            }
          </div>
          <div className={`${this.state.editable ? "":"hidden"}`}>
            <ReactQuill theme="snow" value={this.state.quillData} modules={quillOptions} onChange={(value)=>{
              this.setState({newQuillData: value})
            }} />
          </div>
        </div>
      </>
    )
  }
}

export default JobCard