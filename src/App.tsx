import React from 'react';
import Bookshelf from './Bookshelf';
import Book from './Book';
import './App.css';

function App() { // Content go here :)
    return (
        <main>
            <Bookshelf>
                <Book coverImage="internment.jpg" title="War Relocation Authority" color='#235b99' position={[-140, -30, -15]}>
                    <p>EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
                        EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
                        EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
                    </p>
                </Book>
                <Book coverImage="richardAoki.webp" title="Richard Aoki" color='#63252a' position={[-50, 10, 25]}>
                    <p>Joshua Foo</p>
                    <p>Ate a Canoe </p>
                </Book>
                <Book coverImage="dbm2013.png" title="Delano Grape Strike" color='#235b99' position={[20, 10, 0]}>
                    <p>
                        In 1965, Filipino farmworkers in Delano, California went on strike, demanding a raise in hourly
                        wages and piece rates. The strike was led by Larry Itliong and Ben Gines of the Agricultural
                        Workers Organizing Committee (AWOC). The National Farm Workers Association (NFWA), led by Cesar
                        Chavez, also joined the strike after a vote. Even after being threatened and attacked, the
                        farmworkers continued in their strike, and the NFWA did a consumer boycott campaign which
                        pressured growers into recognizing the NFWA as a union. This struggle for farmworker rights
                        ultimately became part of a larger movement for civil rights and social justice. It was a joint
                        effort between both Hispanic Americans and Filipino Americans that ultimately impacted the
                        entirety of the agricultural economy in favor of the workers.
                    </p>
                </Book>
                <Book coverImage="withey2018.png" title="Gene Allen" color='#63252a' position={[60, -20, 10]}>
                    <p>Mason Bread</p>
                    <p>Slept in bed</p>
                </Book>
                <Book coverImage="peteryew.png" title="Peter Yew Beating" color='#63252a' position={[-80, 15, 10]}>
                    <p>Kevin Pinecone</p>
                    <p>IDK what rhymes with Pinecone</p>
                </Book>
                <Book coverImage="chinatown.jpg" title="Police Brutality Against Asians" color='#435c4c' position={[-60, 65, 35]}>
                    <p>Your telling me a shrimp fried this rice?</p>
                    <p>CONTENT</p>
                </Book>
                <Book coverImage="aapa.png" title="Vietnamese War March" color='#235b99' position={[0, 40, -20]}>
                    <p>Chefs kiss?</p>
                    <p>Do they really?</p>
                </Book>
                <Book coverImage="pickets.png" title="Third World Revolution" color='#435c4c' position={[40, 30, -30]}>
                    <p>The bird flu?</p>
                    <p>Yeah, they tend to do that</p>
                </Book>
            </Bookshelf>
        </main>
    );
}

export default App;
