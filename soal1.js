
// soal pertama

var data1 = [1, 1, 1, 2, 2, 4, 1, 1]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1]



function soal1(array) {
  var angkaSementara = 0;
  var jumlahSementara = 0;

  for (var i = 0; i < array.length; i++) {
    var filtered = array.filter((arr) => arr === array[i]);

    if (filtered.length > jumlahSementara) {
      jumlahSementara = filtered.length;
      angkaSementara = array[i];
    }
  }

  return 'total data paling banyak keluar adalah ' + angkaSementara + ' dengan jumlah ' + jumlahSementara
}



soal1(data1)