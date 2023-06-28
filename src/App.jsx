import { useState, useEffect } from "react";
import "./App.css";
import peopleData from "./data";


function App() {
const [data, setData] = useState(peopleData);
function handleClick() {
  setData([])
}
  return (
    <section className="section">
      <h1 id="title">{data.length} Birthdays Today</h1>
      <BirthdayList data ={data} setData={setData}/>
      <button type="text" className="btn"onClick={handleClick}>Clear All</button>
    </section>
  );
}



 function BirthdayList(props) {
  const {data, setData} = props
  function handleSpan(id) {
    let newBirthPerson = data.filter((person) =>{
      return person.id !== id
    })
    setData(newBirthPerson)
  }
  return (
    <article>
      {data.map((people) => {
        return <Birthday key={people.id} {...people} handleSpan={handleSpan}/>;
      })}
    </article>
  );
}


function Birthday(props) {
  const {image, id, name, age, handleSpan} = props
  return (
    <div className="protion">
      <img src={image} alt="" width={75} height={75} />
      <div className="text-section">
        <h1>
          {name}<span onClick={() =>handleSpan(id)}>X</span>
        </h1>
        <p>{age}years</p>
      </div>
    </div>
  );
}


export default App;
