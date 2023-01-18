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
        <FaEdit className={`${this.state.editable ? "hidden":""} place-self-end`} onClick={()=>{
          this.setState({editable: true})
        }}>Edit</FaEdit>
        <section className={`grid mb-4 ${this.state.editable ? "gap-4":""}`}>
          <h1 className={`font-extrabold mb-2 text-3xl text-blue-400 place-self-center ${this.state.editable ? "hidden":""}`}>{this.state.name}</h1>
          <div className={`${this.state.editable ? "":"hidden"} grid`}>
            <label className="font-bold mb-1" htmlFor='name'>Name</label>
            <input name='name' className="border-2 border-gray-300 p-2 px-4 rounded-md focus-visible:outline-blue-400" value={this.state.name} onChange={this.handleChange}></input>
          </div>
          <div className={`grid ${this.state.editable ? "gap-4":""}`}>
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.phone}</span>
            <div className={`${this.state.editable ? "":"hidden"} grid`}>
              <label className="font-bold mb-1" htmlFor="phone">Phone</label>
              <input name='phone' className="border-2 border-gray-300 p-2 px-4 rounded-md focus-visible:outline-blue-400" defaultValue={this.state.phone} onChange={this.handleChange}></input>
            </div>
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.email}</span>
            <div className={`${this.state.editable ? "":"hidden"} grid`}>
              <label className="font-bold mb-1" htmlFor="email">Email</label>
              <input name='email' className="border-2 border-gray-300 p-2 px-4 rounded-md focus-visible:outline-blue-400" defaultValue={this.state.email} onChange={this.handleChange}></input>
            </div>
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.location}</span>
            <div className={`${this.state.editable ? "":"hidden"} grid`}>
              <label className="font-bold mb-1" htmlFor="location">Location</label>
              <input name='location' className="border-2 border-gray-300 p-2 px-4 rounded-md focus-visible:outline-blue-400" defaultValue={this.state.location} onChange={this.handleChange}></input>
            </div>
          </div>
        </section>
        <div>
          <div className={`${this.state.editable ? "":"hidden"} flex justify-center items-center text-xl gap-8 text-white mb-6`}>
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

export default Header