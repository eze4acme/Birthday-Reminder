import { useState } from "react";
import "./App.css";
import peopleData from "./data";

function App() {
//  <img src="./src/assets/images/hip1.jpg" alt="" srcset="" width={500} height={500}/>
  return (
    <section className="section">
      <h1>5 Birthdays Today</h1>
      <BirthdayList />
      <button type="text">Clear All</button>
    </section>
  );
}



 function BirthdayList() {
  const [data, setData] = useState(peopleData);
  return (
    <article>
      
      {peopleData.map((people) => {
        // console.log(people);
        return <Birthday key={people.id} {...people} />;
      })}
    </article>
  );
}


function Birthday(props) {
  const {image, id, name, age} = props
  return (
    <div className="protion">
      <img src={image} alt="" width={300} height={300}/>
      <div className="text-section">
        <h1>{name}</h1>
        <p>{age}years</p>
      </div>
    </div>
  )
}


export default App;
