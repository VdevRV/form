import React from 'react';
import './login.css';
import swal from 'sweetalert';
import Storage from './storage';
class Login extends React.Component {

  state={
    firstname:"",
    lastname:"",
    employeeid:"",
    email:"",
    phno:"",

  }

  // static getaccountdetails(){

  //   let data={ 
  //     emp101:{firstname:"aaa",lastname:"aaa",employeeid:"emp101",email:"aaa@gmail.com",phno:"0000000000"}
  //   }
  //   return data;
  // }

  onempidchange=(event)=>{

    this.setState({employeeid:event.target.value});
  }

 
  onlastnamechange=(event)=>{

    this.setState({lastname:event.target.value})
  }

  onemailchange=(event)=>{

    this.setState({email:event.target.value})
  }
  onphnochange=(event)=>{

    this.setState({phno:event.target.value})
  }

  onsubmit=(event)=>{

    event.preventDefault();
    let empid=this.state.employeeid
    let lname=this.state.lastname;
    let email=this.state.email;
    let phno=this.state.phno;

    alert(email);
    
    Storage.adduser(empid,lname,email,phno);
 

  }

  onlogin=(event)=>{

    let empid=this.state.employeeid
    let lname=this.state.lastname;
    let email=this.state.email;
    let phno=this.state.phno;





    event.preventDefault();
    let data=Storage.getaccountdetails();
  
    
    swal("insubmit\n\n"+ "employee-id:"+empid+
    "\nphno :"+phno+
    "\nlname:"+lname+
    "\nemail :"+email+
    

    "\n\non array\n\n"+
      
      "employee-id:"+data.employeeid[1]+
        "\nemail :"+data.email[1]+
        "\nphno :"+data.phno[1]+
        "\nlname :"+data.lastname[1] );



    //    if(empid==data.employeeid[1]){

    //   swal("last name  :"+data.lastname[1]);

      
    // }
    // else{
    //   swal("false employee id");
    // }


  }


   
    render() {
      return (

          <div className="wrapper">

            <div className="title">
            <p className="Title"><b>REGISTRATION FORM</b></p>
            </div>

            <form onSubmit={this.onsubmit}>



            <input type="text" placeholder="Employee ID " onChange={this.onempidchange} value={this.state.employeeid} className="employee-id" ></input>
            <br/>
            <small>*enter employee id</small>
            <br/>
            <br/>

            {/* <input type="text" placeholder="First Name" onChange={this.onfirstnamechange} value={this.state.firstname}  className="first-name" ></input>
            <br/>
            <small>*enter first  name</small>
            <br /><br/> */}
            <input type="text" placeholder="Last Name" onChange={this.onlastnamechange} value={this.state.lastname} className="last-name"></input>
            <br></br>
            <small>*enter name</small>

            <br /><br/>
            <input type="email" placeholder="example@gmail.com" onChange={this.onemailchange} value={this.state.email} className="email"></input>
            <br></br>
            <small>*email here</small>

            <br /><br/>
            <input type="text" placeholder="phonenumber" onChange={this.onphnochange} value={this.state.phno} className="ph-num"></input>
            <br></br>
            <small>*phone-num</small>

            <br /><br/>
            <button type="submit" className="btn"  > SUBMIT</button>

            <button className="btn" onClick={this.onlogin} >LOGIN </button>







            </form>

           

        </div>

        
      );
    }
  }

export default Login;
