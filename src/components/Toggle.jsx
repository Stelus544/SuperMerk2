import React from 'react'
import '../styles/Toggle.css'

export default function Toggle() {

    const [isDarkMode, setIsDarkMode] = React.useState(false);

    React.useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

  return (
    <button type="button" class="toggle-button" onClick={handleToggle}>
        🌙
    </button>
  )
}
