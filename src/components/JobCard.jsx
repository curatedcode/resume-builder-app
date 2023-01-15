import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
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
  updateData(){
    let localData = this.state.initialJobsData
    const newData = {
      title: this.props.title,
      company: this.props.company,
      location: this.props.location,
      dateStart: this.props.dateStart,
      dateEnd: this.props.dateEnd,
      quillData: this.props.quillData,
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
          <button className={this.state.editable ? "hidden":""} onClick={()=>{
            this.setState({editable: true})
          }}>Edit</button>
          <button className={this.state.editable ? "":"hidden"} onClick={()=>{
            this.updateData()
            this.setState({editable:false})
          }}>Save</button>
        </div>
        <div className="grid mb-4">
          <span className={`font-bold text-lg ${this.state.editable ? "hidden":""}`}>{this.state.title}</span>
          <div className={`${this.state.editable ? "":"hidden"}`}>
              <input value={this.state.title} onChange={e=>this.setState({title: e.target.value})}></input>
          </div>
          <div className="opacity-50 flex gap-2">
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.dateStart}</span>
            <div className={`${this.state.editable ? "":"hidden"}`}>
              <input value={this.state.dateStart} onChange={e=>this.setState({dateStart: e.target.value})}></input>
            </div>
            <span>to</span>
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.dateEnd}</span>
            <div className={`${this.state.editable ? "":"hidden"}`}>
              <input value={this.state.dateEnd} onChange={e=>this.setState({dateEnd: e.target.value})}></input>
            </div>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.company}</span>
          <div className={`${this.state.editable ? "":"hidden"}`}>
            <input value={this.state.company} onChange={e=>this.setState({company: e.target.value})}></input>
          </div>
          <span className={`${this.state.editable ? "hidden":""}`}>{this.state.location}</span>
          <div className={`${this.state.editable ? "":"hidden"}`}>
            <input value={this.state.location} onChange={e=>this.setState({location: e.target.value})}></input>
          </div>
          <div className={`${this.state.editable ? "hidden":""} prose prose-invert text-inherit`}>
            {
              parse(this.state.quillData)
            }
          </div>
          <div className={`${this.state.editable ? "":"hidden"}`}>
            <ReactQuill theme="snow" value={this.state.quillData} modules={quillOptions} onChange={(value)=>{
              this.setState({quillData: value})
              console.log(value)
            }} />
          </div>
        </div>
      </>
    )
  }
}

export default JobCard