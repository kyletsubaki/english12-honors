import Bookshelf from './Bookshelf';
import Book from './Book';
import './App.css';

function AutoLink(props: React.HTMLProps<HTMLAnchorElement>) {
    return <a {...props}>{props.href}</a>;
}

function App() {
    return (
        <main>
            <div className="nameplate-container">
                <div className="nameplate">{process.env.REACT_APP_FUNNY_NAMES
                    ? <>Kyle Tsubaki - English 12 S1 Honors Project</>
                    : <>Kyle Tsubaki - English 12 S1 Honors Project</> 
                }</div>
            </div>
            <Bookshelf>
                <Book title="General Principles" color='#435c4c' position={[0, 50, 0]}>
                    <p>
                        Rote memorization is a terrible way to learn. 
                    </p>
                </Book>
                <Book coverImage="ruylopez.png" title="Ruy Lopez" color='#435c4c' position={[0, 30, -15]}>
                    <p>
                        1. e4, e5 2. Nf3, Nc6 3. Bb5
                    </p>
                </Book>
                <Book coverImage="sicilian.png" title="Sicilian Defense" color='#235b99' position={[35, 5, 10]}>
                    <p>
                        1. e4, c5
                    </p>
                </Book>
                <Book coverImage="carokann.png" title="Caro-Kann Defense" color='#63252a' position={[40, 0, -10]}>
                    <p>
                        1. e4, c6
                    </p>
                </Book>
                <Book coverImage="queensgambit.png" title="Queen's Gambit" color='#63252a' position={[0, 10, 0]}>
                    <p>
                        1. d4, d5 2. c4 
                    </p>
                </Book>
                <Book coverImage="french.png" title="French Defense" color='#235b99' position={[0, 10, 0]}>
                    <p>
                        1. e4, e6
                    </p>
                </Book>
                <Book coverImage="fourknights.png" title="Four Knights Game" color='#235b99' position={[-20, 15, -12]}>
                    <p>
                        
                    </p>
                </Book>
                <Book coverImage="english.png" title="English Opening" color='#63252a' position={[10, 25, 10]}>
                    <p>
                        1. c4
                    </p>
                </Book>
                <Book coverImage="scandinavian.png" title="Scandinavian Defense" color='#63252a' position={[40, 15, 10]}>
                    <p>
                        
                    </p>
                </Book>
                <Book coverImage="kingsindian.png" title="King's Indian Defense" color='#435c4c' position={[60, 5, -5]}>
                    <p>
                        
                    </p>
                </Book>
                <Book coverImage="réti.png" title="Réti Opening" color='#235b99' position={[0, 45, 10]}>
                    <p>
                         
                    </p>
                </Book>
                <Book coverImage="londonsystem.png" title="London System" color='#768b99' position={[0, 45, -5]}>
                    <p>

                    </p>
                </Book>
            </Bookshelf>
            <img src="wp.png" className="top-right-image" alt="whitepawn" />
            <img src="board.png" className="top-left-image" alt="board" />
            <img src="bp.png" className="bottom-left-image" alt="blackpawn" />
            <img src="bn.png" className="bottom-right-image" alt="blackknight" />
        </main>
    );
}

export default App;
