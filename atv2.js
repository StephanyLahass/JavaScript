document.addEventListener('DOMContentLoaded', f_load)

function f_load() {

    const listaum = document.createElement('ol')
    document.body.prepend(listaum)
    const contH2 = document.querySelectorAll('h2')

    for (let i = 0; i < contH2.length; i++) {

        const elementos = f_newlist(`#h2${i + 1}`, contH2[i].textContent)
        listaum.appendChild(elementos)
        mudarH2(contH2[i], i + 1)

    }
}

function f_newlist(ref, texto) {

    const li = document.createElement('li')
    const criarLink = f_newlink(ref, texto)
    li.appendChild(newlink)

    return li
}

function f_newlink(href, texto) {

    const newlink = document.createElement('a')
    newlink.setAttribute('href', href)
    newlink.textContent = texto

    return newlink
}

function mudarH2(elemento, num) {
    elemento.textContent = `${num}. ${elemento.textContent}`
    elemento.id = `h2${num}`
    const voltar = f_newlink('#', 'Voltar')
    f_indepois(elemento, voltar)
}

function f_indepois(elemento, ref) {
    const nextElement = elemento.nextElementSibling
    elemento.parentElement.insertBefore(ref, nextElement)
}
