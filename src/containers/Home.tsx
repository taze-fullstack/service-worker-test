import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div>/home</div>
      <h1>This is the [Typescript] Home page.</h1>
      <h2>service-worker test</h2>
      <img
        width="100%"
        height="auto"
        src="https://cdn.shopify.com/s/files/1/2327/5701/articles/Omega-3-For-Dogs_1200x.jpg"
        alt=""
      />
      <div>This is a doggo</div>
      <Link to="/about">Go to About</Link>
    </div>
  );
};

export default Home;
