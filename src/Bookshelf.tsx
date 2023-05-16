import { useState, createContext, PropsWithChildren } from "react";

const SelectedContext = createContext<[string | null, React.Dispatch<React.SetStateAction<string | null>>] | undefined>(undefined);

function Bookshelf({children}: PropsWithChildren) { //It functions
    const [selected, setSelected] = useState<string | null>(null);

    return (<SelectedContext.Provider value={[selected, setSelected]}>
        <div className="grid">
            {children}
        </div>
    </SelectedContext.Provider>)
}

export {SelectedContext};
export default Bookshelf;