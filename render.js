export function render(vinyls) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    const genreP = document.createElement('p');
    const priceP = document.createElement('p');

    
    li.classList.add('vinyls');
    h3.classList.add('vinyl-artist');
    h4.classList.add('vinyl-albumn');
    img.classList.add('vinyl-image');
    genreP.classList.add('genre');
    priceP.classList.add('price');

    h3.textContent = vinyls.artist;
    h4.textContent = vinyls.albumn;
    img.src = vinyls.image;
    genreP.textContent = `a ${vinyls.genre} album for ${vinyls.genre} lovers`;
    priceP.textContent = `$${vinyls.price}`;

    li.append(
        h3,
        h4,
        img,
        genreP,

    );
    return li;
}