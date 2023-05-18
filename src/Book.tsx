import { ReactNode, useContext, useRef } from "react";
import { SelectedContext } from "./Bookshelf";
import Portal from "./Portal";
import { CSSTransition } from 'react-transition-group';

function Book({ children, coverImage, title, position = [0, 0, 0], color }: {
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
    const coverRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);
    return (<>
        <CSSTransition nodeRef={coverRef} in={!opened} timeout={1000} classNames="slide">
            <div ref={coverRef}>
                <div className="cover" onClick={handleClick} style={{
                    transform: `translate(${position[0]}px, ${position[1]}px) rotate(${position[2]}deg)`,
                    backgroundColor: color,
                    // visibility: opened ? 'hidden' : undefined
                }}>
                    <img src={coverImage} alt={title} className="cover-image" />
                    <h2>{title}</h2>
                </div>
            </div>
        </CSSTransition>
        <Portal>
            <CSSTransition nodeRef={backgroundRef} in={opened} timeout={1000} classNames="fade" appear unmountOnExit>
                <div ref={backgroundRef} className="background" onClick={() => setSelected(null)}></div>
            </CSSTransition>
            <CSSTransition nodeRef={contentRef} in={opened} timeout={1000} classNames="slide" appear unmountOnExit>
                <div ref={contentRef} className="content-container">
                    <div className="content" style={{ backgroundColor: color }}>
                        <div className="content-pages">
                            <h2>{title}</h2>
                            <img src={coverImage} alt={title} className="cover-image" />
                            {children}
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </Portal>
    </>);
}

export default Book;
