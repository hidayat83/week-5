function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var m = 1;
    while(angka>0){
      m *= angka%10;
      angka = Math.floor(angka/10);
    }
    if(m<10)
      return m;
    else 
      return kaliTerusRekursif(m);
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6