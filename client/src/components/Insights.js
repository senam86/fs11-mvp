import React, { useState, useEffect } from 'react';
// import './App.css';

//start with defining state
export default function Insights() {
  const [insights, setInsights] = useState([]);
  const [insight, setInsight] = useState({
    title: "",
    category: "",
    description: "",
    ratings: 0,
  });

  //useEffect will run everytime the data updates inside the component and the first time (no need to reload the page)
  useEffect(() => {
    getInsight();
  }, []); //everytime I change, refresh the page so I can have my full list again

const addInsight = () => {
  fetch('/insights', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(insight),
  }).then(() => {getInsight()}) //has to be a callback function 
    .catch((error) => {
      console.log("Error");
    });
};

const getInsight = () => {
  fetch('/insights', {
    method:'GET',
  }).then(response => response.json()).then(response => {
    setInsights(response)
  
  }) 
    .catch((error) => {
      console.log("Error");
    });
};


function handleSubmit(event) {
  event.preventDefault();
  //event.target is specifically for the form
  addInsight();
  // getInsight();
};

const handleChange = ({ target }) => {
  setInsight((state) => ({ ...state, [target.name]: target.value }));
};

return (
  <div className='Insights'>
  <h1 className="title">Welcome</h1>
  <p>Add your tips here!</p>
  <form onSubmit={handleSubmit} align='center'>
    <div>
      <input type='text' name='title' placeholder='title' onChange={handleChange}/>
    </div>
  <br/>
    <div>
      <input type='text' name='category' placeholder='category' onChange={handleChange}/>
    </div>
  <br/>
    <div>
      <textarea col={50} row={15} name='description' placeholder='description' onChange={handleChange}/>
    </div>
  <br/>
    <div>
      <input type='text' name='ratings' placeholder='ratings' onChange={handleChange}/>
    </div>
  <br/>
    <div>
      <input className='submit' type='submit' value='submit'/>
    </div>
  </form>
  <br/>
      <div>
        {insights && (<h2 align='center'>Insights</h2>)}
    {/* for every insight in my list, display it on my browser */}
    {insights.map((element) => (
      // each element should have a key
      <div key={element.id}>
        <li onClick={() => getInsight(element.id)} >
        <span>{element.title}</span><br/>, 
        <span>{element.category}</span><br/>, 
        <span>{element.description}</span><br/>, 
        <span>{element.ratings}</span><br/>
        </li>
      </div>
    ))}
  </div>
    </div>

);
};


