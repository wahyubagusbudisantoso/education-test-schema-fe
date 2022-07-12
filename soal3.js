function soal3Kiri(height) {
  var result = '\n';
  for (var i = 1; i <= height; i++) {
    for (var y = 1; y <= i; y++) {
      result += '*';
    }
    result += '\n';
  }

  return result;
}

soal3Kiri(6);


function soal3Kanan(max) {
  var result = '';
  for (var i = max; i > 0; i--) {
    for (var y = 0; y <= i; y++) {
      result += ' ';
    }

    for (var x = 0; x < max - i; x++) {
      result += '*';
    }

    result += '\n';
  }

  return result;
}

soal3Kanan(5);