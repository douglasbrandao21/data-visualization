import colorLib from '@kurkle/color';

export function addTransparency(value, opacity) {
    var alpha = opacity === undefined ? 0.5 : 1 - opacity;
    
    return colorLib(value).alpha(alpha).rgbString();
}