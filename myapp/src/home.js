import React from 'react' ;
import Storage from './storage';
import './home.css'

let data = Storage.getaccountdetails();
let last=data.lastname;
let empid=data.employeeid;
let email=data.email;
let phno=data.phno
console.log(data);

class Home extends React.Component {

  

    render() {
      return (
        <div className="to-do-list-main">
          <table>
          <tr>
            <th>Name</th>
            <th>Emp-id</th>
            <th>email</th>
            <th>phno</th>
          </tr>  
          <td>
          {
            last.map((ele)=>{
              return(
                <tr>{ele}</tr>
              );
            })
          }
          </td>

          <td>
          {
            empid.map((ele)=>{
              return(
                <tr>{ele}</tr>
              );
            })
          }
          </td>
          <td>
          {
            email.map((ele)=>{
              return(
                <tr>{ele}</tr>
              );
            })
          }
          </td>

          <td>
          {
            phno.map((ele)=>{
              return(
                <tr>{ele}
                <button>click here</button>
                </tr>
              );
            })
          }
          </td>
      

          </table>
        

        </div>

        
      );
    }
  }

export default Home;
