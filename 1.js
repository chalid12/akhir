function hitungTotalUangInvestor() {
    let modalAwal = 1000000000; // 1 miliar

    // Investasi
    let deposito = 350000000; // 350 juta
    let obligasi = 650000000; // 650 juta
    let sahamA = obligasi * 0.35; // 35% 
    let sahamB = obligasi * 0.65; // 65%

    // Keuntungan per tahun
    let keuntunganDeposito = 0.035;//3,5%
    let keuntunganObligasi = 0.13;//13%
    let keuntunganSahamA = 0.145;//14,5%
    let keuntunganSahamB = 0.125;//12,5%

    // Hitung total dua tahun
    let totalDeposito = deposito * Math.pow(1 + keuntunganDeposito, 2);
    let totalObligasi = obligasi * Math.pow(1 + keuntunganObligasi, 2);
    let totalSahamA = sahamA * Math.pow(1 + keuntunganSahamA, 2);
    let totalSahamB = sahamB * Math.pow(1 + keuntunganSahamB, 2);

    let totalUang = totalDeposito + totalObligasi + totalSahamA + totalSahamB;

    console.log("Total uang investor setelah dua tahun: " + totalUang);
}

hitungTotalUangInvestor();
