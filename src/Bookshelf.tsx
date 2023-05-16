function Bookshelf() { //It functions
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div className="grid">
            <Book cover="internment.jpg" title="Internment" opened={selected == 0} onClick={() => setSelected(0)}>
                <p>It was the worst of times</p>
            </Book>
        </div>
    )
}

export default function Bookshelf;