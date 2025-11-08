import React from 'react'


const About = () => {
  return (
    <div className="flex flex-col items-center mt-10 px-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">About Our Food App</h1>
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl text-center">
        Welcome to <span className="font-semibold">FoodieZone</span> — your favorite food ordering app built using <strong>React.js</strong>!
        <br /><br />
        This web app helps users explore a variety of restaurants, check their menus, 
        and filter top-rated places. The app dynamically fetches restaurant data using APIs 
        and displays it using reusable React components.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl text-center mt-4">
        Features include:
        <ul className="list-disc text-left mt-2 ml-10">
          <li>Dynamic restaurant cards using API calls</li>
          <li>Search functionality to find restaurants easily</li>
          <li>Top-rated restaurant filter</li>
          <li>Routing using React Router</li>
          <li>State management using useState and useEffect hooks</li>
        </ul>
      </p>
      <p className="mt-6 text-gray-600 italic">
        This project was created as part of my learning journey in Frontend Development.
      </p>
    </div>
  );
};


export default About