import React, { useContext, useEffect } from 'react';
import { themeContext } from '../../App';
import { dictionary } from '../../lang';
import './style.scss';

const Header = () => {
    const crrThemeContext = useContext(themeContext);
    useEffect(() => {
        const crrTheme = localStorage.getItem('theme');
        if (crrTheme) {
            crrThemeContext.setThemeValue(crrTheme);
        } else {
            localStorage.setItem('theme', crrThemeContext.themeValue);
        }
    }, [])
    return (
        <div className="header">
            <ul>
                <li>{dictionary[crrThemeContext.lang]['K_2']}</li>
                <li>{dictionary[crrThemeContext.lang]['K_3']}</li>
                <li>{dictionary[crrThemeContext.lang]['K_4']}</li>
                <button onClick={() => {
                    crrThemeContext.setThemeValue(crrThemeContext.themeValue === 'light' ? 'dark' : 'light');
                }}>Theme mode</button>
                <button onClick={() => {
                    crrThemeContext.setLang(crrThemeContext.lang === 'VI' ? 'EN' : 'VI');
                }}>Lang</button>
            </ul>
        </div>
    )
}

export default Header;