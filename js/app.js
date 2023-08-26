function generateNumbers() {
    const resultBox = document.querySelector('#result');
    if (!resultBox) {
        console.warn("Nem található #result doboz.");
        return;
    }

    resultBox.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * (45 - 5 + 1)) + 5;
        resultBox.innerHTML += `${randomNumber}<br>`;
    }
}

document.querySelector('#generate').addEventListener('click', generateNumbers);