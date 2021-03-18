

let data={ 
      lastname:["aaa","bbb"],
      employeeid:["emp1001","emp1002"],
      email:["aaa@gmail.com","bbb@gmail.com"],
      phno:["0000000000","1111111"]
    }



class Storage{

    static getaccountdetails(){

        return data;


      }

     static adduser(employeeid,lastname,email,phno){

            data.employeeid.push(employeeid);
            data.lastname.push(lastname);
            data.email.push(email);
            data.phno.push(phno);
     }
    
}

export default Storage ;
