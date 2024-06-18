// Centraliza as funções de consumo de APIs
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/SusananRibeiro/portfolio_ficticio_v1.0-html-css-js/main/data/profile.json'; // '/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}

