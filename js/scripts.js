const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
let darkThemeByDevice, lightThemeByDevice;

// Define as classes de tema com base na largura inicial da janela
function defineThemeClasses() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 480)     {
        darkThemeByDevice = 'darkOp-theme';
        lightThemeByDevice = 'lightOp-theme';
    } else {
        darkThemeByDevice = 'dark-theme';
        lightThemeByDevice = 'light-theme';
    }
}

// Atualiza o tema com base no esquema de cores
function updateTheme(e) {
    const themeClass = e.matches ? darkThemeByDevice : lightThemeByDevice;
    document.getElementById('A4').className = themeClass;
}

// Atualiza o tema com base no tamanho da janela
function updateThemeOnResize() {
    defineThemeClasses(); // Atualiza as classes de tema com base na nova largura
    const themeClass = mediaQuery.matches ? darkThemeByDevice : lightThemeByDevice;
    document.getElementById('A4').className = themeClass;
}

// Inicialização
defineThemeClasses();
updateTheme(mediaQuery);

// Detecta alterações no esquema de cores
mediaQuery.addEventListener('change', updateTheme);

// Detecta alterações no tamanho da janela
window.addEventListener('resize', updateThemeOnResize);

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