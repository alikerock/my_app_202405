import { Component,setState } from 'react';
import './App.css';
import Myheader from './components/Myheader';
import Mynav from './components/Mynav';
import ReadArticle from './components/ReadArticle';
import Controls from './components/Controls';
import CreateArticle from './components/CreateArticle';

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
    this.max_id = 3;
    this.state = {      
      mode:'welcome',
      selected_id:2,
      subject:{
        title:'react',
        desc:'Single Page Application'
      },
      welcome:{
        title:'Welcome',
        desc:'Welcome to React'
      },
      menus:[
        {id:1, title:'HTML', desc:'Hypertext markup language'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'javascript', desc:'Javascript is for interaction'}
      ]
    }
  }

  render() {
    console.log("App 실행");
    let _title, _desc, _article = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadArticle title={_title} desc={_desc}/>
    }else if(this.state.mode === 'read'){
      let i=0;
      while(i<this.state.menus.length){
        let data = this.state.menus[i];
        if(data.id === this.state.selected_id){
          _title = data.title;
          _desc = data.desc;
        }
        i++;
      }
      _article = <ReadArticle title={_title} desc={_desc}/>
    }else if(this.state.mode === 'create'){

      _article = <CreateArticle onSubmit={(_title,_desc)=>{
        //this.max_id = this.max_id + 1;
        this.max_id += 1;
        // this.state.menus.push(
        //   {id:this.max_id, title:_title, desc:_desc}
        // )
        // let _menus = this.state.menus.concat(
        //   {id:this.max_id, title:_title, desc:_desc}
        // );
        let _menus = [...this.state.menus];
        _menus.push(
            {id:this.max_id, title:_title, desc:_desc}
          );
        this.setState({
          menus:_menus
        });
      }} />
    }

    return (
      <div className="App">
        <Myheader title={this.state.subject.title} desc={this.state.subject.desc} onChangePage={(val)=>{
          this.setState({mode:val})
        }}/>
        <Mynav data={this.state.menus} onChangePage={(id)=>{
          console.log(id);
          this.setState({
            mode:'read',
            selected_id:Number(id)
          })
        }}/>
        
        {_article}
        <hr/>
        <Controls onChangeMode={(value)=>{
          this.setState({
            mode:value,
          })
        }}/>
      </div>
    )
  }
}

export default App;
