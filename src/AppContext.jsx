import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleButtonClick = (slideIndex) => {
        setActiveSlide(slideIndex);
    };

    const contextValue = {
        activeSlide,
        handleButtonClick,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
