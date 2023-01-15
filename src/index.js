import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

localStorage.setItem('cv-header',JSON.stringify({
  data: {
    name: "Johnny Doeseph",
    phone: "(111) 444-2222",
    email: "johndoeisreal@fake.com",
    location: "New York, New York"
  },
}))

localStorage.setItem('cv-experience',JSON.stringify({
  data: {
    job1:{
      title: "Head of Marketing",
      company: "MarketingUSA",
      location: "New York, New York",
      dateStart: "05/2002",
      dateEnd: "Present",
      quillData: '<ul><li>My first one</li><li>My Second One</li></ul>'
    },
    job2:{
      title: "Lost Marketing",
      company: "MarketingUS",
      location: "Buffalo, New York",
      dateStart: "01/2000",
      dateEnd: "05/2002",
      quillData: '<ul><li>My first one</li><li>My Second One</li></ul>'
    }
  }
}))

localStorage.setItem('cv-education', JSON.stringify({
  data: {
    degree1: {
      school: "University of Florida",
      degree: "Masters Degree (MBA)",
      study: "Business Administration",
      location: "Florida",
      dateStart: "05/2015",
      dateEnd: "Present"
    },
    degree2: {
      school: "University of Miami",
      degree: "Associate of Science",
      study: "Computer Technology",
      location: "Florida",
      dateStart: "01/2002",
      dateEnd: "05/2006"
    }
  }
}))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
