import Bookshelf from './Bookshelf';
import Book from './Book';
import './App.css';

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
                <Book title="General Principles" color='#435c4c' position={[-20, 240, 0]}>
                    <p>
                        "Moves in the openings are based on certain ideas. 
                        These ideas form the background and foundation, 
                        while the moves represent actual construction" (Fine 1). 
                        Understanding the principles of chess openings is crucial to developing a strong game. 
                        These principles are designed to help players establish a solid position from the beginning, 
                        which leads to better performance in the middlegame and endgame. The center of the board, particularly the squares e4, d4, e5, and d5, is crucial because pieces in the center can typically reach a greater number of squares than pieces on the edges of the board. Controlling the center allows for more mobility and flexibility in planning future moves. Development refers to moving your pieces from their initial positions to more effective spots on the board. In general, it's advised to develop your knights and bishops first, as they can control the center and allow for the rooks and queen to be developed later. Developing your pieces allows you to prepare for both offensive and defensive actions. One of the primary goals in the early game is to ensure the safety of your king. This is often achieved by castling, which moves the king to a safer location and connects the rooks. Avoiding unnecessary pawn moves in front of your castled king can also help maintain a strong defensive structure. In the opening, it's important to avoid moving the same piece multiple times and to limit pawn moves. Each move should improve your position. Moving the same piece multiple times in the opening can waste valuable time (tempo) that could be used to develop other pieces. Rather than developing pieces randomly, it's important to have a plan. This involves knowing where and why you are moving your pieces. For example, you might develop your knights to attack pawns or your bishops to pin knights. Your pawns can also guide your pieces' development, as their movement can create open files and diagonals for your pieces. Taking the initiative means making threats that force your opponent to respond, thus giving you control over the course of the game. By developing your pieces with threats, you can keep your opponent on the defensive and control the game. Good luck on your upcoming matches, and please read each opening carefully to fully understand the concepts behind each move.
                    </p>
                </Book>
                <Book coverImage="ruylopez.png" title="Ruy Lopez" color='#435c4c' position={[0, 200, -15]}>
                    <p>
                    The Ruy Lopez, also known as the Spanish Opening, is one of the oldest and most classical of all chess openings. Named after the Spanish bishop Ruy López de Segura, it is a favorite among beginners and world champions alike due to its rich strategic and tactical opportunities. The opening begins with the moves 1.e4 e5 2.Nf3 Nc6 3.Bb5. The idea behind this is to control the center early with 1.e4 and 2.Nf3, and then 3.Bb5, which prepares to put pressure on the black center at e5, and also to create opportunities for tactical motifs such as pins. The Ruy Lopez overall emphasizes on piece development, control of the center, and pawn structure considerations. It's a rich opening with a complex interplay of strategies and tactics. Each variation requires a deep understanding of these principles, and mastery of the Ruy Lopez is considered a milestone in a chess player's development.
                    
                    </p>
                </Book>
                <Book coverImage="sicilian.png" title="Sicilian Defense" color='#235b99' position={[35, 5, 10]}>
                    <p>
                    The Sicilian Defense is one of the most popular and dynamic defenses in chess, offering a rich variety of positions and strategic depth. It arises after the moves 1.e4 c5. The primary idea behind this defense is to create an asymmetrical pawn structure that prevents White from achieving an easy pawn majority in the center, leading to unbalanced positions with winning chances for both sides. As for White, the goals can include maintaining control of the central squares, exploiting weaknesses in Black's pawn structure or piece coordination, launching a kingside attack, and maximizing the space advantage. The Sicilian Defense is a complex opening that requires a deep understanding of these principles, and mastery of it is considered a significant achievement in a chess player's development.
                    </p>
                </Book>
                <Book coverImage="carokann.png" title="Caro-Kann Defense" color='#63252a' position={[40, 300, -10]}>
                    <p>
                    The primary objective for Black in the Caro-Kann Defense is achieving full development while maintaining a strong pawn chain. This opening is rooted in timeless chess principles, with the aim of controlling the center and challenging White's pawn on e4 right from the start, thereby establishing a sturdy structure from the outset. It offers an early challenge to White's pawn on e4 while creating a solid, compact structure that's difficult to crack. This balance allows Black to weather the initial storms, maintain a strong pawn chain, and transition into a middlegame that's abundant with strategic and tactical possibilities. The Caro-Kann Defense strategy often revolves around the timely ...c5 breakthrough. This crucial pawn advance seeks to challenge White's central stronghold, provoking tension and potential tactical opportunities. It's a counterpunch that can destabilize White's setup, opening doors to a counterattack. Lastly, a typical Caro-Kann plan involves the active deployment of the light-squared bishop, usually before playing ...e6. This principle of active piece play is crucial in the Caro-Kann, ensuring your forces aren't just defensively sound, but also primed for offensive action. Focus on maintaining a strong pawn structure. The aim is to avoid weaknesses that the opponent could exploit in the endgame. As Black, you'll typically aim for a setup with pawns on c6 and e6, a structure that provides a firm defensive backbone, creating a fortress that can withstand White's aggressive ambitions.
                    </p>
                </Book>
                <Book coverImage="queensgambit.png" title="Queen's Gambit" color='#63252a' position={[320, 110, 20]}>
                    <p>
                    The Queen's Gambit, beginning with the moves 1.d4 d5 2.c4, is one of the oldest and most reputable openings in chess. The idea of this opening is for White to gain control of the center by offering a pawn on the c4 square, aiming to deflect Black's central d5 pawn to the side of the board. Despite its name, the Queen's Gambit is not a true gambit as Black cannot safely hold on to the extra pawn. For White, the primary goals include establishing a strong presence in the center, applying pressure on Black's position, and exploiting any weaknesses that may arise in Black's pawn structure or piece coordination. If Black accepts the gambit with 2...dxc4, White aims to quickly recover the pawn while developing pieces and exerting control over the center. If Black declines the gambit with 2...e6 or 2...c6, White still focuses on building a strong central presence and preparing for potential pawn breaks to challenge Black's setup. For Black, the main strategic concept is to challenge White's central control while maintaining a solid and flexible pawn structure. In the Queen's Gambit Declined, Black aims to hold onto the d5 pawn, often leading to a somewhat cramped but solid position. Counterattacking White's d4 pawn with the c7-c5 pawn break is a common plan. In the Queen's Gambit Accepted, Black temporarily gives up the center to obtain free development and aims to exploit potential weaknesses in White's pawn structure, such as an isolated d-pawn.
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
