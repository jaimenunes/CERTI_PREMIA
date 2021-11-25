const pilotUrl = "https://swapi.dev/api/people/"

const idPilots = [21, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20]


function fazGetPilots(url, id){
    id.forEach(element => {
        fetch(`${url+element}`,{
            method: 'GET',
            Headers: ('Access-Control-Allow-Origin:', 'https://swapi.dev')
        })
        .then(res => res.json())
        .then(data =>{ 
            const nome = data.name
            uploadPilots(nome)
        })
        .catch(err => console.log(err))
    });
}

fazGetPilots(pilotUrl, idPilots)

function uploadPilots(nome){
    const divStaPilots= document.createElement('div')
    divStaPilots.style.backgroundImage = 'url(../imagem/Anakin.png)'
    const paragraphStaPilots = document.createElement('p')
    let root = document.getElementById(`pilot-line-1`)
    let root2 = document.getElementById(`pilot-line-2`)
    let root3 = document.getElementById(`pilot-line-3`)
    if(root.children.length < 6){
        root.classList.add('line-items')
        paragraphStaPilots.innerHTML = nome
        divStaPilots.classList.add('items')
        divStaPilots.appendChild(paragraphStaPilots)
        root.appendChild(divStaPilots)
    }else if(root.children.length === 6 && root2.children.length < 6){
        root2.classList.add('line-items')
        paragraphStaPilots.innerHTML = nome
        divStaPilots.classList.add('items')
        divStaPilots.appendChild(paragraphStaPilots)
        root2.appendChild(divStaPilots)
    }else if(root.children.length === 6 && root2.children.length === 6){
        root3.classList.add('line-items')
        paragraphStaPilots.innerHTML = nome
        divStaPilots.classList.add('items')
        divStaPilots.appendChild(paragraphStaPilots)
        root3.appendChild(divStaPilots)
    }

}