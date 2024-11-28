const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const windowWidth = window.innerWidth;
let darkThemeByDevice, lightThemeByDevice;

if(windowWidth <= 400){
    darkThemeByDevice = 'darkOp-theme';
    lightThemeByDevice = 'lightOp-theme';
}else{
    darkThemeByDevice = 'dark-theme';
    lightThemeByDevice = 'light-theme';
}

function updateTheme(e) {
    const themeClass = e.matches ? darkThemeByDevice : lightThemeByDevice;
    document.getElementById('A4').className = themeClass;
}

// Detecta alterações no tema
mediaQuery.addEventListener('change', updateTheme);

// Define o tema inicialmente
updateTheme(mediaQuery);

let language = "en";
document.getElementById('language-button').addEventListener('click', function() {
    if(language == "en"){
        document.getElementById('language-img').src = './logos/brazilflag.png';
        language = "pt-br"
    }else{
        document.getElementById('language-img').src = './logos/usaflag.png';
        language = "en"
    }

    const displayNoneElements = document.querySelectorAll('.display-none');
    const displayBlockElements = document.querySelectorAll('.display-block');

    displayNoneElements.forEach((element) => {
        element.classList.remove('display-none');
        element.classList.add('display-block');
    });

    displayBlockElements.forEach((element) => {
        element.classList.remove('display-block');
        element.classList.add('display-none');
    });
});