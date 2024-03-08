const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(leng, chars){
    let key = '';
    for(let i = 0; i < leng; i++){
            key += chars[Math.floor(Math.random() * chars.length)];
    }
    return key;
}

const key = generateKey(16, characters);
console.log(key);