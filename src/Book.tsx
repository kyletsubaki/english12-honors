import { ReactNode, useContext } from "react";
import { SelectedContext } from "./Bookshelf";
import Portal from "./Portal";

function Book({children, coverImage, title, position = [0, 0, 0], color }: {
    children: ReactNode,
    coverImage: string,
    title: string,
    position?: [x: number, y: number, rotate: number],
    color?: string
}) {
    const [selected, setSelected] = useContext(SelectedContext)!;
    const opened = selected === title;
    const handleClick = () => {
        setSelected(title);
    }
    return (
        <section className={'book'}>
            <div className="cover" onClick={handleClick} style={{
                transform: `translate(${position[0]}px, ${position[1]}px) rotate(${position[2]}deg)`,
                backgroundColor: color,
                visibility: opened ? 'hidden' : undefined
            }}>
                <img src={coverImage} alt={title} className="cover-image" />
                <h2>{title}</h2>
            </div>
            {opened && <Portal>
                <div className="background" onClick={() => setSelected(null)}></div>
                <div className="popup-book-container" style={{ backgroundColor: color }}>
                    <div className="popup-book">
                        <h2>{title}</h2>
                        <img src={coverImage} alt={title} className="cover-image" />
                        {children}
                    </div>
                </div>
            </Portal>}
        </section>
    );
}

export default Book;
