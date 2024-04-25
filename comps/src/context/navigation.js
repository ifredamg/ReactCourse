import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);

        return () => { //Cleanup function
            window.removeEventListener('popstate', handler);
        }
    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to); //queremos navegar com o pushState para não refrescar completamente a página
        setCurrentPath(to);
    };

    return (
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider };
export default NavigationContext;