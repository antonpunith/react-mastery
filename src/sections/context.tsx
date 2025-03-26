import React, { createContext, useContext, useState } from "react";

// 1. Create Context
interface ThemeContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "light", setTheme: () => {} });

// 2. Provide Context
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState("light");

    return (
        <div className={theme}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>
        </div>

    );
};

// 3. Consume Context
const ThemedComponent = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle Theme
            </button>
        </div>
    );
};

const Context = () => (
    <ThemeProvider>
        <ThemedComponent />
    </ThemeProvider>
);

export default Context;