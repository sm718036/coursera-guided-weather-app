const homeBtn = document.querySelector('.home-button');
const homePage = document.querySelector('.home');
const forecastPage = document.querySelector('.forecast');
const checkWeatherBtn = document.querySelector('.search-btn');

homeBtn.addEventListener('click', (e)=>{
    forecastPage.classList.remove('active-section');
    homePage.classList.add('active-section');
    e.currentTarget.style.display = 'none';
})

checkWeatherBtn.addEventListener('click', (e)=>{
    homePage.classList.remove('active-section');
    forecastPage.classList.add('active-section');
    homeBtn.style.display = 'block';
})