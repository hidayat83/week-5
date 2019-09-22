function sorting(arrNumber) {
    // code di sini
    var swapp;
    if(!arrNumber.length)
        return [];
    for (var n = arrNumber.length - 1; n; n--) {
        swapp = false;
        for (var i = 0; i < n; i++) {
            if (arrNumber[i] < arrNumber[i + 1]) {
                var temp = arrNumber[i];
                arrNumber[i] = arrNumber[i + 1];
                arrNumber[i + 1] = temp;
                swapp = true;
            }
        }
    }
    return arrNumber;
  }
  
  function getTotal(arrNumber) {
    // code di sini
    var largest = arrNumber[0], total = 0;
    for(var i=0; i<arrNumber.length; i++)
        if(arrNumber[i] === largest)
            total++;
        else
            break;
    return !arrNumber.length ? '' : `angka paling besar adalah ${largest} dan jumlah kemunculan sebanyak ${total} kali`;
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''