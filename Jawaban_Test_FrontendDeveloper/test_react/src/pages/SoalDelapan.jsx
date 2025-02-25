const SoalDelapan = () => {
  return (
    <>
      <div className="container mx-auto my-20">
        <h2>Laporan debug HTML (soal 8)</h2>
        <ol>
          <li className="list-disc">Line 24 - kurang tanda koma</li>
          <li className="list-disc">Line 429 - kurang tanda petik</li>
          <li className="list-disc">Line 438 - value dari key masih kosong</li>
          <li className="list-disc">Line 541 - kurang index i</li>
          <li className="list-disc">
            Line 534 sampai 537 - condition if dipindah sebelum deklarasi cleanA
            dan cleanB
          </li>
          <li className="list-disc">
            Line 553 - dihapus karena tidak diperlukan
          </li>
        </ol>
      </div>
    </>
  );
};

export default SoalDelapan;
