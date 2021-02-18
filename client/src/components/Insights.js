import React, { useState } from 'react';
// import './App.css';

//start with defining state
export default function Insights() {
  const [insights, setInsights] = useState([]);
  
  // let userId = userId.value;
  // let title = title.value;
  // let category = category.value;
  // let description = description.value;
  // let ratings = ratings.value;

const addInsight = () => {
  fetch('/insights', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, title, category, description, ratings }),
  })
    .catch((error) => {
      console.log("Error");
    });
};

const displayInsight = () => {
  fetch('/insights', {
    method:'GET',
  }).then(response => response.json()).then(response => {
    displayInsight(userId, title, category, description, ratings)
  }) 
    .catch((error) => {
      console.log("Error");
    });
};

function handleSubmit(event) {
  event.preventDefault();

  let title = event.target.title.value;
  let category = event.target.category.value;
  let description = event.target.description.value;
  let ratings = event.target.ratings.value;
  addInsight(title, category, description, ratings);
  displayInsight();
};

// function handleClick(event) {
//   event.preventDefault();
//   displayInsight();
// };

return (
  <div className='Insights'>
  <h1>Welcome !</h1>
  <form onSubmit={handleSubmit}>
    <div>
      <input type='text' name='title' placeholder='title'/>
    </div>
  <br/>
    <div>
      <input type='text' name='category' placeholder='category'/>
    </div>
  <br/>
    <div>
      <textarea col={25} row={15} name='description' placeholder='description'/>
    </div>
  <br/>
    <div>
      <input type='text' name='ratings' placeholder='ratings'/>
    </div>
  <br/>
    <div>
      <input type='submit' value='submit'/>
    </div>
  </form>
</div>
);
};
