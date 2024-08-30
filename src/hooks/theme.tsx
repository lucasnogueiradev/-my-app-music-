// src/hooks/theme.ts
import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dark from "../../src/styles/theme/Dark";
import light from "../../src/styles/theme/Light";

interface IThemeContext {
  toggleTheme: () => void;
  theme: ITheme;
}

interface ITheme {
  title?: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    font: string;
    white: string;
    black: string;
    gray: string;
    success: string;
    info: string;
    warning: string;
    button: string;
  };
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ITheme>(dark);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const themeSaved = await AsyncStorage.getItem("@Atend-Pro:theme");
        if (themeSaved) {
          setTheme(JSON.parse(themeSaved));
        }
      } catch (error) {
        console.error("Error loading theme:", error);
      }
    };

    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme.title === "dark" ? light : dark;
    setTheme(newTheme);
    try {
      await AsyncStorage.setItem("@Atend-Pro:theme", JSON.stringify(newTheme));
    } catch (error) {
      console.error("Error saving theme:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
