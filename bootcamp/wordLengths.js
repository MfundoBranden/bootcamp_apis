export default function wordLengths(word) {
    var sentence = word.split(' ');
    let arr = sentence.map(w => w.length);
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}