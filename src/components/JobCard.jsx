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
      quillData: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    let localStorageData = JSON.parse(localStorage.getItem('cv-experience'))
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
  reset(){
    this.setState({title: this.state.initialData.title})
    this.setState({company: this.state.initialData.company})
    this.setState({location: this.state.initialData.location})
    this.setState({dateStart: this.state.initialData.dateStart})
    this.setState({dateEnd: this.state.initialData.dateEnd})
    this.setState({quillData: this.state.initialData.quillData})
  }
  updateData(){
    let data = this.state.initialJobsData
    const newData = {
      title: this.state.title,
      company: this.state.company,
      location: this.state.location,
      dateStart: this.state.dateStart,
      dateEnd: this.state.dateEnd,
      quillData: this.state.quillData,
    }
    data[this.props.objectKey] = newData
    localStorage.setItem('cv-experience',JSON.stringify(data))
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
          <FaEdit className={`${this.state.editable ? "hidden":""} hover:cursor-pointer hover:text-blue-500 float-right`} onClick={()=>{
            this.setState({editable: true})
          }}>Edit</FaEdit>
          <div className='flex justify-center gap-8 text-xl text-white mb-2'>
            <button className={`${this.state.editable ? "":"hidden"} hover:bg-blue-600 py-1 px-2 rounded-md bg-blue-500 transition-colors`} onClick={()=>{
              this.updateData()
              this.setState({editable:false})
            }}>Save</button>
            <button className={`${this.state.editable ? "":"hidden"} hover:bg-blue-600 py-1 px-2 rounded-md bg-blue-500 transition-colors`} onClick={()=>{
              this.reset()
              this.setState({editable:false})
            }}>Cancel</button>
          </div>
        </div>
        <div className={`grid mb-4 ${this.state.editable ? 'gap-2':''}`}>
          <span className={`font-bold text-lg ${this.state.editable ? "hidden":""}`}>{this.state.title}</span>
          <div className={`${this.state.editable ? "":"hidden"} grid`}>
              <label className="font-bold mb-1" htmlFor="title">Job title</label>
              <input name="title" className="border-2 border-gray-300 p-2 px-4 rounded-md  focus-visible:outline-blue-400" value={this.state.title} onChange={this.handleChange}></input>
          </div>
          <div className={`flex gap-2 ${this.state.editable ? '':'opacity-50'}`}>
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.dateStart}</span>
            <div className={`${this.state.editable ? "":"hidden"} grid`}>
              <label className="font-bold mb-1" htmlFor="dateEnd">Start date (MM/YYYY)</label>
              <input name="dateStart" className="border-2 border-gray-300 p-2 px-4 rounded-md  focus-visible:outline-blue-400" value={this.state.dateStart} onChange={this.handleChange}></input>
            </div>
            <span className={this.state.editable ? "hidden":''}>to</span>
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.dateEnd}</span>
            <div className={`${this.state.editable ? "":"hidden"} grid`}>
              <label className="font-bold mb-1" htmlFor="dateEnd">End date (MM/YYYY)</label>
              <input name="dateEnd" className="border-2 border-gray-300 p-2 px-4 rounded-md  focus-visible:outline-blue-400" value={this.state.dateEnd} onChange={this.handleChange}></input>
            </div>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.company}</span>
          <div className={`${this.state.editable ? "":"hidden"} grid`}>
            <label className="font-bold mb-1" htmlFor="company">Company</label>
            <input name="company" className="border-2 border-gray-300 p-2 px-4 rounded-md  focus-visible:outline-blue-400" value={this.state.company} onChange={this.handleChange}></input>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.location}</span>
          <div className={`${this.state.editable ? "":"hidden"} grid`}>
            <label className="font-bold mb-1" htmlFor="location">Location</label>
            <input name="location" className="border-2 border-gray-300 p-2 px-4 rounded-md  focus-visible:outline-blue-400" value={this.state.location} onChange={this.handleChange}></input>
          </div>
          <div className={`${this.state.editable ? "hidden":""} prose prose-invert text-inherit`}>
            {
              parse(this.state.quillData)
            }
          </div>
          <div className={`${this.state.editable ? "":"hidden"}`}>
            <label className="font-bold mb-1" htmlFor="description">Description</label>
            <ReactQuill className="focus-visible:outline-blue-400" theme="snow" value={this.state.quillData} modules={quillOptions} onChange={(value)=>{
              this.setState({quillData: value})
            }} />
          </div>
        </div>
      </>
    )
  }
}

export default JobCard