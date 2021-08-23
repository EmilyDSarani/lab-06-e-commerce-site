export function render(vinyls) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    const genreP = document.createElement('p');
    const priceP = document.createElement('p');

    
    li.classList.add('vinyls');
    h3.classList.add('vinyl-name');
    h4.classList.add('vinyl-album');
    img.classList.add('vinyl-image');
    genreP.classList.add('genre');
    priceP.classList.add('price');

    h3.textContent = vinyls.name;
    h4.textContent = vinyls.album;
    img.src = vinyls.image;
    genreP.textContent = `a ${vinyls.genre} album for ${vinyls.genre} lovers`;
    priceP.textContent = `$${vinyls.price}`;

    li.append(
        h3,
        h4,
        img,
        genreP,
        priceP

    );
    return li;
}