import React from 'react';
import './App.css';

function App() {
  // Sample Data matching Image 1
  const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/3/20201' }
  ];

  const books = [
    { title: 'Master React', price: '670' },
    { title: 'Deep Dive into Angular 11', price: '800' },
    { title: 'Mongo Essentials', price: '450' }
  ];

  const blogs = [
    { title: 'React Learning', author: 'Stephen Biz', description: 'Welcome to learning React!' },
    { title: 'Installation', author: 'Schewzdenier', description: 'You can install React from npm.' }
  ];

  return (
    <div className="container">
      {/* Column 1: Course Details */}
      <div className="column">
        <h2>Course Details</h2>
        {courses.map((course, index) => (
          <div key={index} className="item">
            <h3>{course.name}</h3>
            <p>{course.date}</p>
          </div>
        ))}
      </div>

      {/* Column 2: Book Details */}
      <div className="column">
        <h2>Book Details</h2>
        {books.map((book, index) => (
          <div key={index} className="item">
            <h3>{book.title}</h3>
            <p>{book.price}</p>
          </div>
        ))}
      </div>

      {/* Column 3: Blog Details */}
      <div className="column">
        <h2>Blog Details</h2>
        {blogs.map((blog, index) => (
          <div key={index} className="item">
            <h3>{blog.title}</h3>
            <p><strong>{blog.author}</strong></p>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;