async function repositorioNoGithub() {
    try {
        const response = await fetch('https://api.github.com/users/devjonatanmarquess/repos');
        const body = await response.json();
        return body;
    } catch (err) {
        console.log(err);
    } finally {
        //console.log('deu');
    }
}

repositorioNoGithub().then((apigit) => {

    let juntando = ``
    console.log(apigit.length)

    for (let i = 0; i < apigit.length; i++) {

        if (apigit[i].homepage === "" || apigit[i].homepage === null) {
            juntando += `<p>${i + 1} - <a target="_blank" href="https://github.com/${apigit[i].full_name}">${apigit[i].name}</a></p>`;
        } else {
            juntando += `<p>${i + 1} - <a target="_blank" href="https://github.com/${apigit[i].full_name}">${apigit[i].name}</a> - 
                    <a target="_blank" href="${apigit[i].homepage}"> [Acessar Website]</a></p>`;
        }

    }

    let el = document.querySelector("#repo-js");
    el.innerHTML = juntando;

});