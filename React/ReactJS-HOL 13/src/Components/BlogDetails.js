function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: "React Learning",
      author: "Welcome to Learning React!",
      description: "React is a JavaScript library"
    }
  ];

  return (
    <div className="box">
      <h2>Blog Details</h2>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.author}</p>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;