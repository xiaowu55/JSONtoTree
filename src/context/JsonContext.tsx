import { createContext } from "react";

interface JsonContextType {
    jsonDate: string;
    setJsonDate: React.Dispatch<React.SetStateAction<string>>; 
}

const JsonContext = createContext<JsonContextType>({
    jsonDate: '',
    setJsonDate: () => {},
});

export default JsonContext
