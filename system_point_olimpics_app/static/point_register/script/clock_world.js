const clockElements = document.querySelectorAll('.clocks h1')
const flagImage = document.querySelector('.flags')
const changeCountryButton = document.querySelector('.btn_clock')

// lista de países
const countries = [
    { name: 'Brazil', flag: '/static/point_register/img/flag-for-flag-brazil-svgrepo-com.svg', offset: -3 },
    { name: 'Portugal', flag: '/static/point_register/img/flag-for-flag-portugal-svgrepo-com.svg', offset: 0 },
    { name: 'England', flag: '/static/point_register/img/england-svgrepo-com.svg', offset: 0 }
]

let currentCountryIndex = 0;

// função para atualizar
function updateClock(offset) {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000; // ajusta o utc
    const localTime = new Date(utc + (offset * 3600000));

    const hours = String(localTime.getHours()).padStart(2, '0');
    const minutes = String(localTime.getMinutes()).padStart(2, '0');
    const seconds = String(localTime.getSeconds()).padStart(2, '0');

    clockElements[0].textContent = `${hours}:`
    clockElements[1].textContent = `${minutes}:`
    clockElements[2].textContent = `${seconds}`
}

// atualizar a bandeira
function changeCountry() {
    currentCountryIndex = (currentCountryIndex + 1) % countries.length;
    const country = countries[currentCountryIndex];

    flagImage.src = country.flag
    updateClock(country.offset)
}

// atualizar o relógio a cada segundo
setInterval(() => updateClock(countries[currentCountryIndex].offset), 1000);

// Evento de click para mudar o país
changeCountryButton.addEventListener('click', changeCountry)

// iniciar com primeiro pais
updateClock(countries[currentCountryIndex].offset)