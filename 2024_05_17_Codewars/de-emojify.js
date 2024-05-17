function emoteToChar(emote) {
    const emoteToDigit = {
      ':)': '0', ':D': '1', '>(': '2', '>:C': '3', ':/'  : '4', ':|': '5', 
      ':O': '6', ';)': '7', '^.^': '8', ':('  : '9'
    };
  
    let charCode = '';
    for (const e of emote.split(' ')) {
      if (emoteToDigit[e]) {
        charCode += emoteToDigit[e];
      } else {
        return '';
      }
    }
    return String.fromCharCode(parseInt(charCode));
  }
  
  function deEmojify(emoteStr) {
    let result = '';
    for (const chain of emoteStr.split('  ')) {
      const char = emoteToChar(chain);
      if (char) {
        result += char;
      } else {
        result += ''; 
      }
    }
    return result;
  }