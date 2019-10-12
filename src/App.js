import React, { Component} from 'react'
import Header from './Header'
import Intro from  './Intro'
import Sample from './Sample'
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <Header/>
      <Intro/> */}
      <Sample name='Aditya' link="http" />
      <Parent />
      <Cars />
      {/* <header className="App-header">
          Edit <code>src/App.js</code> and save to reload.
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}
}

class Parent extends Component{

render(){
  return(

    <div>
<h2> Just some info </h2>
   <Cars msg="Cars are cool" model="34567" coolCars= {['BMW','MERC','city','Audi']}/>
    </div>
  );
}
}


// Parent.defaultProps = {
//   cars: ['BMW','MERC','city','Audi']
// }

class Cars extends Component{
  render(){
    
    let {coolCars} = this.props;
    console.log(Array.isArray(this.props.coolCars));
    console.log(coolCars)
    return(
      <div>
          <h3> I am from cars component </h3>
          <p>{this.props.msg}      </p> 
          <p>{this.props.model}    </p>
          




          {/* <h3>  prop number is : {this.props.propNumber}  </h3> */}
          <p>{coolCars} </p>
          {coolCars ? coolCars.map((index, item) => <p key={index}> {item} </p>
             
                
          ):<div> Null </div>}


          
      </div>
    );
  }
}

// App.propTypes = {
//   propObject: React.PropTypes.object,
//   propString: React.PropTypes.string,
//   propNumber: React.PropTypes.number
// }

// App.defaultProps = {
//   propNumber: 3,
//   propString: "This is a prop string",
//   propObject: {
//     obj1: "I am obj 1",
//     obj2: "I am obj 2",
//     obj3: "I am obj 3"
//   }
// }




export default App;