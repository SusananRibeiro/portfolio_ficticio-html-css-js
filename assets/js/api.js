// Centraliza as funções de consumo de APIs
async function fetchProfileData() {
    const url = '/data/profile.json'; // 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
