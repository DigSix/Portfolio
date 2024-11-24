const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function updateTheme(e) {
    const themeClass = e.matches ? 'dark-theme' : 'light-theme';
    document.getElementById('A4').className = themeClass;
    document.getElementById('language-button').className = themeClass;
}

// Detecta alterações no tema
mediaQuery.addEventListener('change', updateTheme);

// Define o tema inicialmente
updateTheme(mediaQuery);

document.getElementById('language-button').addEventListener('click', function() {
    if(document.getElementById('language-button').textContent == '🇧🇷'){
        document.getElementById('language-button').textContent = '🇺🇸';
        return
    }
    document.getElementById('language-button').textContent = '🇧🇷';
});