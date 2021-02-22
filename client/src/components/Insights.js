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
    // setInsights(response.title, response.category, response.description, response.ratings) //check how data is stored on to do list students
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
  <h1>Welcome</h1>
  <form onSubmit={handleSubmit}>
    <div>
      <input type='text' name='title' placeholder='title' onChange={handleChange}/>
    </div>
  <br/>
    <div>
      <input type='text' name='category' placeholder='category' onChange={handleChange}/>
    </div>
  <br/>
    <div>
      <textarea col={25} row={15} name='description' placeholder='description' onChange={handleChange}/>
    </div>
  <br/>
    <div>
      <input type='text' name='ratings' placeholder='ratings' onChange={handleChange}/>
    </div>
  <br/>
    <div>
      <input type='submit' value='submit'/>
    </div>
  </form>
      <div>
        {insights && (<h4>Insights</h4>)}
    {/* for every insight in my list, display it on my browser */}
    {insights.map((element) => (
      // each element should have a key
      <div key={element.id}>
        <li onClick={() => getInsight(element.id)}>
          {element.title}, {element.category}, {element.description}, {element.ratings}
        </li>
      </div>
    ))}
  </div>
    </div>
//      ({insight && (
//      <div>
//        {insight.title}, {insight.category}, {insight.description}, {insight.ratings}
//      </div>

//    )})};
   
//   {/* add place to show my insights
//   use map */}
// </div>



);
};


