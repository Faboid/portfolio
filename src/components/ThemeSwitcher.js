import './ThemeSwitcher.css';
import React, { useState } from 'react';

export default function ThemeSwitcher() {

    const [theme, setTheme] = useState('dark');
    let sphereClassName = 'theme-state ' + theme;

    if(theme === 'light') {
        setLight();
    } else {
        setDark();
    }

    function switchTheme() {
        setTheme(prev => {
            console.log(prev);

            if(prev === 'dark') {
                return 'light';
            }

            return 'dark';

        });
    }

    return (
        <div onMouseDown={switchTheme} className="theme-switcher">
            <div className={sphereClassName}></div>
        </div>
    );
}

const rootElement = document.documentElement;

function setDark() {
    rootElement.classList.remove('light');
    rootElement.classList.add('dark');
}

function setLight() {
    rootElement.classList.remove('dark');
    rootElement.classList.add('light');
}