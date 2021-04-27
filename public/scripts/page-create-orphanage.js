const map = L.map('mapid').setView([-27.2139088,-49.6455749], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

map.on('click', (event) => { 
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

//adicionar o campo de fotos
function addPhotoField() {
    //pegar o container de fotos #Images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone, da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo esta vazio e nao adicionar ao campo de imagens
    const input = newFieldContainer.children[0]   

    if(input.value == ""){
        return
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    //adicionar o clone ao container de #images  
    container.appendChild(newFieldContainer)  
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }
    //deletar o campo
    span.parentNode.remove();
}

//seleção de Sim ou Nao
function toggleSelect(event) {
    //colocar a classe .ative dos botoes
    document.querySelectorAll('.button-select button')
    .forEach( function(button) {
        button.classList.remove('active')
    })
    //colocar a classe .active do botao clicado
    const button = event.currentTarget
    button.classList.add('active')
    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value 
}

/*function validate(event) {
    //validar se lat e lng estao preenchido
    const needsLatandLng = true;
    if(needsLatandLng){ 
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    } else {
        return
    }
}*/

