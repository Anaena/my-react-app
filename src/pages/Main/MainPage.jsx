import { Restaurants } from '../../components/Restaurants/Restaurants';
import { Header } from '../../components/Header/Header';
import { restaurants } from '../../constants/fixtures';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import { useState } from 'react';
import { THEMES } from "../../constants/theme";

export const MainPage = () => {
  const [theme, setTheme] = useState(THEMES.Light);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div>
        <Header />
        <ErrorBoundary>
          <Restaurants restaurants={restaurants} />
        </ErrorBoundary>
      </div>
    </ThemeContext.Provider>
  );
};
