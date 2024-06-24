function cetakPola(n) {
  for (let i = n; i >= 1; i--) {
    let spasi = " ".repeat(n - i);
    process.stdout.write(spasi);

    for (let j = 0; j < i; j++) {
      if (j % 2 === 0) {
        process.stdout.write("# ");
      } else {
        process.stdout.write("+ ");
      }
    }
    console.log();
  }
}

// Contoh penggunaan
cetakPola(5);
