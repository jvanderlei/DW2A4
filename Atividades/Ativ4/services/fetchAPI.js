export default async () => {
    let cep = document.getElementById("cepField");
    await consultaCEP(cep)
        .then(uf => {
            consultaCovid(uf)
                .then((casos) => {
                    console.log(casos)
                     let parent = cep.parentElement;
                     let casesP = document.createElement("p");
                     casesP.setAttribute("style", "color: green;");
                     casesP.textContent = `Numero de casos: ${casos} `;
                     parent.appendChild(casesP);
                     })
        })

}

let consultaCovid = async (uf) => {
    let casos;
    console.log(uf)
    await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data.cases)
            casos = data.cases
        });
        return casos;
}


let consultaCEP = async (cep) => {
    let uf;
    await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then((resp) => resp.json())
        .then((data) => uf = data.uf)
        .catch(error => {
            let parent = cep.parentElement;
            let warn = document.createElement("p");
            warn.setAttribute("style", "color: red;");
            warn.textContent = "Digite um CEP valido";
            parent.appendChild(warn);
        })
    return uf;
}