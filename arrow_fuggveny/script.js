function reverse() {
    const inputElement = document.getElementById("inputText");
    const str = inputElement.value;
    const reversedStr = str.split('').reverse().join('');
    console.log(reversedStr);
}