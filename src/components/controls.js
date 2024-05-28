import { Component } from 'react';

class Controls extends Component {
    render() {
      console.log("Controls 실행"); 
      return (
        <ul className='controls'>
          <li><a href="">Update</a></li>
          <li><a href="">delete</a></li>
          <li> <button onClick={()=>{
          this.props.onChangeMode();
        }}>Create</button></li>
        </ul>
       
      )
    }
  }
export default Controls;