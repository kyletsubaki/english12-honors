import React from 'react';
import Bookshelf from './Bookshelf';
import Book from './Book';
import './App.css';

function App() { // Content go here :)
    return (
        <main>
            <Bookshelf>
                <Book coverImage="internment.jpg" title="War Relocation Authority" color='#ff0000'>
                    <p>EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
                        EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
                        EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
                    </p>
                </Book>
                <Book coverImage="richardAoki.webp" title="Richard Aoki" color='#ff02222'>
                    <p>Joshua Foo</p>
                    <p>Ate a Canoe </p>
                </Book>
                <Book coverImage="dbm2013.png" title="Delano Grape Strike" color='#ff40004'>
                    <p>Josiah went to the BAR to get some F00</p>
                </Book> 
                <Book coverImage="withey2018.png" title="Gene Allen" >
                    <p>Mason Bread</p>
                    <p>Slept in bed</p>
                </Book> 
                <Book coverImage="peteryew.png" title="Peter Yew Beating" >
                    <p>Kevin Pinecone</p>
                    <p>IDK what rhymes with Pinecone</p>
                </Book>
                <Book coverImage="chinatown.jpg" title="Police Brutality Against Asians" >
                    <p>Your telling me a shrimp fried this rice?</p>
                    <p>CONTENT</p>
                </Book>
                <Book coverImage="aapa.png" title="Vietnamese War March" >
                    <p>Chefs kiss?</p>
                    <p>Do they really?</p>
                </Book>
                <Book coverImage="pickets.png" title="Third World Revolution" >
                    <p>The bird flu?</p>
                    <p>Yeah, they tend to do that</p>
                </Book>
            </Bookshelf>
        </main>
    );
}

export default App;
