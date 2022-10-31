import "./styles.css"
import contacts from "./contacts";

//const contacts = require("contacts")
function Card(props){
     
    return(
     <div>
        <h1 className="heading">My Contacts</h1>
       <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img"
            src={props.src}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.mail}</p>
        </div>
      </div>
    </div>
    );
}
var App=()=>{
   
    return(
    <div className="App">
        <Card name={contacts[0].name}
              src={contacts[0].imgURL}
              phone={contacts[0].phone}
              mail={contacts[0].email}
        />
        <Card name={contacts[1].name}
              src={contacts[1].imgURL}
              phone={contacts[1].phone}
              mail={contacts[1].email}
        />
        <Card name={contacts[2].name}
              src={contacts[2].imgURL}
              phone={contacts[2].phone}
              mail={contacts[2].email}
        />

    </div>

    );
}
export default App