
const starShipUrl = "https://swapi.dev/api/starships/" 

const idStarShips = [9, 10, 11, 12, 13, 15, 17, 21, 22, 23, 27, 28]


function fazGetStarship(url, id){
    id.forEach(element => {
        fetch(`${url+element}`,{
            method: 'GET',
            Headers: ('Access-Control-Allow-Origin:', 'https://swapi.dev')
        })
        .then(res => res.json())
        .then(data =>{ 
            const nome = data.name
            uploadStarship(nome)
        })
        .catch(err => console.log(err))
    });
}

fazGetStarship(starShipUrl, idStarShips)

function uploadStarship(nome){
    const divStarShip= document.createElement('div')
    divStarShip.style.backgroundImage = 'url(../imagem/death.png)'
    const paragraphStarShip = document.createElement('p')
    let root = document.getElementById(`starship-line-1`)
    let root2 = document.getElementById(`starship-line-2`)
    let root3 = document.getElementById(`starship-line-3`)
    if(root.children.length < 4){
        root.classList.add('line-items')
        paragraphStarShip.innerHTML = nome
        divStarShip.classList.add('items')
        divStarShip.appendChild(paragraphStarShip)
        root.appendChild(divStarShip)
    }else if(root.children.length === 4 && root2.children.length < 4){
        root2.classList.add('line-items')
        paragraphStarShip.innerHTML = nome
        divStarShip.classList.add('items')
        divStarShip.appendChild(paragraphStarShip)
        root2.appendChild(divStarShip)
    }else if(root.children.length === 4 && root2.children.length === 4){
        root3.classList.add('line-items')
        paragraphStarShip.innerHTML = nome
        divStarShip.classList.add('items')
        divStarShip.appendChild(paragraphStarShip)
        root3.appendChild(divStarShip)
    }

}
