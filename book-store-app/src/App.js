// src/App.js

import React, { Component } from 'react';
import './App.css';
import Bookstore from './Components/BookStore'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookstores: [], // Store the bookstore data here
      books: [],
      countries: [],
      authors: []
    };
  }

  componentDidMount() {
    // Fetch data from the API and update the state
    this.fetchData();
  }

  fetchData() {
    // Make an API request to get bookstore data
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    fetch('http://localhost:3000/stores')
      .then((response) => response.json())
      .then((bookstores_data) => {
        // Update the state with the fetched data
        this.setState({ bookstores: bookstores_data.data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

     fetch('http://localhost:3000/books')
      .then((response) => response.json())
      .then((books_data) => {
        // Update the state with the fetched second data
        this.setState({ books: books_data.data });
      })
      .catch((error) => {
        console.error('Error fetching second data:', error);
      });

      fetch('http://localhost:3000/countries')
      .then((response) => response.json())
      .then((countries_data) => {
        // Update the state with the fetched second data
        this.setState({ countries: countries_data.data });
      })
      .catch((error) => {
        console.error('Error fetching second data:', error);
      });

      fetch('http://localhost:3000/authors')
      .then((response) => response.json())
      .then((authors_data) => {
        // Update the state with the fetched data
        this.setState({ authors: authors_data.data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { bookstores } = this.state;
    const { books } = this.state;
    const { countries } = this.state;
    const { authors } = this.state;

    return (
        <div className="App">
          <main>
            {bookstores.map((bookstore) => (
              <Bookstore
                key={bookstore.id}
                bookstore={bookstore}
                books={books}
                countries={countries}
                authors = {authors}
              />
            ))}
          </main>
        </div>
      );
    }
  }

  export default App;
