import { FaEdit } from 'react-icons/fa'
import React from "react";

class Header extends React.Component{
  constructor(){
    super()
    this.state = {
      initialData: JSON.parse(localStorage.getItem('cv-header')).data,
      editable: false,
      name: '',
      phone: '',
      email: '',
      location: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    this.setState({name: this.state.initialData.name})
    this.setState({phone: this.state.initialData.phone})
    this.setState({email: this.state.initialData.email})
    this.setState({location: this.state.initialData.location})
  }
  handleChange(event){
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState({[name]:value})
  }
  reset(){
    this.setState({name: this.state.initialData.name})
    this.setState({phone: this.state.initialData.phone})
    this.setState({email: this.state.initialData.email})
    this.setState({location: this.state.initialData.location})
  }
  updateData(){
    const data = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      location: this.state.location
    }
    localStorage.setItem('cv-header',JSON.stringify({data}))
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
        <section className="grid gap-2">
          <h1 className={`font-extrabold text-3xl text-blue-400 place-self-center ${this.state.editable ? "hidden":""}`}>{this.state.name}</h1>
          <div className={`font-extrabold text-xl text-blue-400 place-self-center ${this.state.editable ? "":"hidden"}`}>
            <input name='name' className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" value={this.state.name} onChange={this.handleChange}></input>
          </div>
          <div className="grid text-ellipsis overflow-hidden whitespace-nowrap gap-2">
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.phone}</span>
            <div className={`${this.state.editable ? "":"hidden"}`}>
              <input name='phone' className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" defaultValue={this.state.phone} onChange={this.handleChange}></input>
            </div>
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.email}</span>
            <div className={`${this.state.editable ? "":"hidden"}`}>
              <input name='email' className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" defaultValue={this.state.email} onChange={this.handleChange}></input>
            </div>
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.location}</span>
            <div className={`${this.state.editable ? "":"hidden"}`}>
              <input name='location' className="border-2 border-gray-500 px-2 rounded-lg active:border-blue-400 hover:border-blue-400 focus:border-blue-400" defaultValue={this.state.location} onChange={this.handleChange}></input>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Header