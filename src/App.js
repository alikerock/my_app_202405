import { Component } from 'react';
import './App.css';
import Myheader from './components/Myheader';
import Mynav from './components/Mynav';
import Myarticle from './components/Myarticle';
/*
function App() {
  return (
    <div className="App">
     Hello, World!
    </div>
  );
}
*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{
        title:'react',
        desc:'Single Page Application'
      },
      menus:[
        {id:1, title:'HTML', desc:'Hypertext markup language'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'javascript', desc:'Javascript is for interaction'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Myheader title={this.state.subject.title} desc={this.state.subject.desc}/>
        <Mynav data={this.state.menus}/>
        <Myarticle title="HTML" desc="Hypertext markup language"/>
      </div>
    )
  }
}

export default App;
