function BookDetails() {
  const books = [
    {
      id: 1,
      name: "Master React",
      price: 670,
      description: "Deep Dive into React"
    }
  ];

  return (
    <div className="box">
      <h2>Book Details</h2>

      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.name}</h3>
          <p>Price: {book.price}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;