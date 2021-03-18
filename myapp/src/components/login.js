import React from 'react'
import './App.css'; 
class ToDoList extends React.Component {
   
  constructor(props){
    super(props);

    this.state ={
      userInput:"",
      list: [],
      userInput2:""

    }
  }

  changeuserinput(input){
    this.setState({
      userInput:input
    })
  }

  addToList(input){
    let listArray= this.state.list;

    listArray.push(input);

    this.setState({
      list: listArray,
      userInput:""
    })
  }

  // -----------------------------------------------------------------------------

  changeuserinput2(input){
    this.setState({
      userInput2:input
    })
  }

  addToList2(input,input2){

   

    let listArray= this.state.list;
    var index = listArray.indexOf(input2);
    alert(index);

    listArray[index]=input;

    this.setState({
      list: listArray,
      userInput:""
    })
  }



  // -----------------------------------------------------------------------------


  removefromlist(input){
    let listArray=this.state.list;

    listArray.pop(input);

    this.setState({
      list:listArray
    })
  }


    render() {
      return (
        <div className="to-do-list-main">

          <input 
          onChange={(e)=>this.changeuserinput(e.target.value)}
          value={this.state.userInput}
          type="text"
           ></input>

           <button onClick={()=>this.addToList(this.state.userInput)} >Press here </button>

           <ul>
             {this.state.list.map( (val)=><li> {val}  
             
              <div>
              <input type="text" 
              onChange={(e)=>this.changeuserinput2(e.target.value)}
              value2={this.state.userInput2}
              ></input>
              <button  onClick={()=>this.addToList2(this.state.userInput2,this.state.userInput)}  >Submit</button>
             </div>

             <button onClick={()=>this.removefromlist(this.state.userInput)} > delete</button>
             
               </li>)}
         
           </ul>

        </div>

        
      );
    }
  }

export default ToDoList;
