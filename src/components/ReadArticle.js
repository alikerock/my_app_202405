import { Component } from 'react';

class ReadArticle extends Component {
    render() {
      console.log("Myarticle 실행"); 
      return (
        <section>
          <article>
            {
              (this.props.level) ?
            <>
            <h2>{this.props.title}</h2>
            <p>{this.props.desc}</p>
            <p>난이도: {this.props.level}</p>
            </>
            :
            <>
            <h2>{this.props.title}</h2>
            <p>{this.props.desc}</p>
            </>
            }
          </article>
          
        
        </section>
      )
    }
  }
export default ReadArticle;