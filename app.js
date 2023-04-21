const switchThemeInputRadio = document.querySelectorAll(".switch-theme")
switchThemeInputRadio.forEach(function(switchThemeRadio){
    switchThemeRadio.addEventListener("click", function (){
        if(switchThemeRadio.checked){
            document.documentElement.setAttribute('data-theme-site', switchThemeRadio.value)
            localStorage.setItem('theme-site', switchThemeRadio.value);
        }
    })
});

const currentTheme = localStorage.getItem('theme-site');
if(currentTheme){
    document.documentElement.setAttribute('data-theme-site', currentTheme);

    switchThemeInputRadio.forEach(function(switchThemeRadio){
        if(currentTheme === switchThemeRadio.value){
            switchThemeRadio.checked = true;
        }
    });
}
