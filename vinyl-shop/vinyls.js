import { musicVinyls } from '../data.js';
import { render } from './render.js';

const ul = document.getElementById('vinyl');

for (let music of musicVinyls){
    const li = render(music);
    ul.append(li);
}