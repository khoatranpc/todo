import { useState, createContext, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { dictionary } from './lang';
import './App.css';

export const themeContext = createContext({
  themeValue: null,
  setThemeValue: (bolValue) => { },
  lang: null,
  setLang: () => { }
});
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [lang, setLang] = useState('VI');
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])
  return (
    <themeContext.Provider value={{
      themeValue: theme,
      setThemeValue: (bolValue) => { setTheme(bolValue) },
      lang: lang,
      setLang: (lang) => { setLang(lang) }
    }}
    >
      <div className={`App ${theme}`}>
        <Header />
        <div className="content-main-app">
          <h1>{dictionary[lang]['K_1']}</h1>
        </div>
        <Footer />
      </div>
    </themeContext.Provider>
  );
}

export default App;
