module.exports = Franz => {

    getMessages = () => {
        const text = document.querySelectorAll("div.pagination")[0].innerText;
        const pattern = /Er (?:is|zijn) (\d+) (?:resultaat|resultaten) gevonden/i
        const regexResult = pattern.exec(text);

        const counter = parseInt(regexResult[1]);

        Franz.setBadge(counter)
    };

    Franz.loop(getMessages);

}
