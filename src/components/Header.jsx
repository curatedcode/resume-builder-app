
import React from "react";

class Header extends React.Component{
  constructor(){
    super()
    this.state = {
      initialData: JSON.parse(localStorage.getItem('cv-header')).data,
      editable: false,
      name: JSON.parse(localStorage.getItem('cv-header')).data.name,
      phone: JSON.parse(localStorage.getItem('cv-header')).data.phone,
      email: JSON.parse(localStorage.getItem('cv-header')).data.email,
      location: JSON.parse(localStorage.getItem('cv-header')).data.location
    }
  }
  componentDidMount(){
    this.setState({name: this.state.initialData.name})
    this.setState({phone: this.state.initialData.phone})
    this.setState({email: this.state.initialData.email})
    this.setState({location: this.state.initialData.location})
  }
  updateData(){
    const oldData = this.state.initialData
    const oldDataStringed = JSON.stringify({data:{oldData}})
    const newData = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      location: this.state.location
    }
    const newDataStringed = JSON.stringify({data:{newData}})
    if(oldDataStringed !== newDataStringed){
      localStorage.setItem('cv-header',newDataStringed)
    }
  }
  render(){
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
        <section className="grid gap-2">
          <h1 className={`font-extrabold text-3xl text-blue-400 place-self-center ${this.state.editable ? "hidden":""}`}>{this.state.name}</h1>
          <div className={`font-extrabold text-xl text-blue-400 place-self-center ${this.state.editable ? "":"hidden"}`}>
            <input value={this.state.name} onChange={e=>this.setState({name: e.target.value})}></input>
          </div>
          <div className="grid text-ellipsis overflow-hidden whitespace-nowrap">
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.phone}</span>
            <div className={`${this.state.editable ? "":"hidden"}`}>
              <input value={this.state.phone} onChange={e=>this.setState({phone: e.target.value})}></input>
            </div>
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.email}</span>
            <div className={`${this.state.editable ? "":"hidden"}`}>
              <input value={this.state.email} onChange={e=>this.setState({email: e.target.value})}></input>
            </div>
            <span className={`${this.state.editable ? "hidden":""}`}>{this.state.location}</span>
            <div className={`${this.state.editable ? "":"hidden"}`}>
              <input value={this.state.location} onChange={e=>this.setState({location: e.target.value})}></input>
            </div>
          </div>
          <div className="border-b-2 rounded-full border-black border-opacity-10 w-28 place-self-center m-2"></div>
        </section>
      </>
    )
  }
}

export default Header