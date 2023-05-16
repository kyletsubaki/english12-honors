import React from 'react';
import logo from './logo.svg';
import Bookshelf from './Bookshelf';
import Book from './Book';
import './App.css';

function App() { // Content go here :)
    return (
        <main>
            <Bookshelf>
                <Book>
                    <img className="" />
                    <h2>CONTENT 1</h2>
                    <p>CONTENT</p>
                    <p>CONTENT </p>
                </Book>
               <Book>
                    <h2>CONTENT 1</h2>
                    <p>CONTENT</p>
                    <p>CONTENT</p>
                </Book>
            </Bookshelf>
        </main>
    );
}

export default App;
