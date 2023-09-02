// BookList.js
import React from 'react';

const BookList = ({ bookstore, books, authors }) => {
  return (
    <div className="book-list-frame">
      <table className="book-list">
        <thead>
          <tr>
            <th>Best-selling books</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookstore.relationships.books &&
          Array.isArray(bookstore.relationships.books.data) &&
          bookstore.relationships.books.data.length > 0 ? (
            bookstore.relationships.books.data.slice(0, 2).map((book) => {
              const foundBook = books.find((item) => item.id === book.id);
              console.log('BFound Book: ', foundBook)
              if (foundBook) {
                const author_id = foundBook.relationships.author.data.id
                const foundAuthor = authors.find((item) => item.id === author_id)
                console.log('Author Id: ', foundAuthor)
                return (
                  <tr key={book.id}>
                    <td>{foundBook.attributes.name}</td>
                    <td>{foundAuthor.attributes.fullName}</td>
                  </tr>
                );
              } else {
                // Handle the case where no matching data is found
                return (
                  <tr key={book.id}>
                    <td>Book Not Found</td>
                    <td>N/A</td>
                  </tr>
                );
              }
            })
          ) : (
            <tr>
              <td colSpan="2">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
