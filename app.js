const jokesParagraph = document.querySelector('[data-jokes-paragraph]');
const jokesButton = document.querySelector('[data-joke-button]');



const pushJoke = async () => {
    const newJoke = await getJoke();
    jokesParagraph.innerText = newJoke;
}

const getJoke = async () => {
    try{
        const resHeader = { headers: { Accept: "application/json" }}
        const res = await axios.get("https://icanhazdadjoke.com/", resHeader);
        return res.data.joke;
    } catch (e) {
        console.log("Oh no loading joke failed :(", e)
    }
}

jokesButton.addEventListener('click', pushJoke);