import { createContext, useState } from "react";

// Create a context for sharing search data across components
export const SearchContext = createContext([]);

export function SearchProvider({ children }) {

    // State to manage the list of search data
    const [searchListData, setSearchListData] = useState([]);
    const [loading, setLoading] = useState(false);

    return (
        // Provide the search data and its updater to child components
        <SearchContext.Provider value={{ loading, setLoading, searchListData, setSearchListData }}>
            {children}
        </SearchContext.Provider>
    )
}