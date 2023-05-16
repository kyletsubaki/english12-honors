function Book({children, coverImage, title, opened, onClick}: {children: ReactNode, coverImage: string, title: string, opened: boolean, onCick: () => void}) {
    return (
        <section>
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </section>
    );
}

export default Book;