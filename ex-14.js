function changeVocals (str) {
    //code di sini
    var vocal = ['a','i','u','e','o'];
    var res = '';
    for(var i=0; i<str.length; i++){
        var isVocal = false;
        for(var j=0; j<vocal.length; j++){
            if(str[i] === vocal[j] || str[i] === vocal[j].toUpperCase()){
                res += String.fromCharCode(str.charCodeAt(i)+1);
                isVocal = true;
                break;
            }
        }
        if(!isVocal)
            res += str[i];
    }
    return res;
  }
  
  function reverseWord (str) {
    //code di sini
    var res = '';
    for(var i=0; i<str.length; i++)
        res = str[i] + res;
    return res;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var res = '';
    for(var i=0; i<str.length; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90)
            res += String.fromCharCode(str.charCodeAt(i) + 32);
        else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
            res += String.fromCharCode(str.charCodeAt(i) - 32);
        else
            res += str[i];
    }
    return res;
  }
  
  function removeSpaces (str) {
    //code di sini
    var res = '';
    for(var i=0; i<str.length; i++)
        if(str[i] !== ' ')
            res += str[i];
    return res;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length<5)
        return `Minimal karakter yang diinputkan adalah 5 karakter`;
    var res = changeVocals(name);
    res = reverseWord(res);
    res = setLowerUpperCase(res);
    res = removeSpaces(res);
    return res;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'