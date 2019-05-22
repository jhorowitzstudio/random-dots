import chroma from 'chroma-js';

export default function({firstColor, secondColor}) {
    return chroma.scale([firstColor, secondColor]);
}
