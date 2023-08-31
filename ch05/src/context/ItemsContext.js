import { createContext, useCallback, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsContextProvider = ({ children }) => {
    // const [loading, error, data] = useDataFetching('https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/items',);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [error, setError] = useState('');

    const fetchItems = useCallback(async (listId) => {
        try {
            const data = await fetch(`https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/lists/${listId}/items`);
            const result = await data.json();
            if (result) {
                setItems(result);
                setLoading(false);
            }
        } catch (e) {
            setLoading(false);
            setError(e.message);
        }
    }, []);

    return (
        <ItemsContext.Provider value={{ items, fetchItems, loading, error }}>
            {children}
        </ItemsContext.Provider>
    );
};

export default ItemsContext;