// soal kedua

var input1 = 'hallo jesika24 selamat datang!';
var input2 = 'hallo anggun selamat datang!';
var input3 = 'hallo ** selamat datang!';
var input4 = 'hallo Mariage889120! selamat datang!';

function soal2(text) {
  var regexAngka = /\d+/g;

  var hasil = text.match(regexAngka);

  if (hasil.length) {
    return 'Sistem kami menolak untuk inputan berisi angka ' + hasil.join('');
  }

  return (
    'Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan ' +
    text
  );
}

soal2(input1);
