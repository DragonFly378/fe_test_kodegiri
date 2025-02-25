import { useState } from "react";
import SHA256 from "crypto-js/sha256";

const SoalTujuh = () => {
  const [tanggal, setTanggal] = useState("");
  const [namaDepan, setNamaDepan] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [hashResult, setHashResult] = useState("");

  const handleHashing = () => {
    const inputString = `${tanggal}${namaDepan}${jenisKelamin}ifabula`;
    const hash = SHA256(inputString).toString();

    console.log(inputString);
    console.log(hash);

    setHashResult(hash);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">SHA-256 Hashing</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleHashing();
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">
            Tanggal (DDMMYYYY)
          </label>
          <input
            type="date"
            placeholder="Masukkan tanggal"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Nama Depan</label>
          <input
            type="text"
            placeholder="Masukkan nama depan"
            value={namaDepan}
            onChange={(e) => setNamaDepan(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Jenis Kelamin</label>
          <select
            value={jenisKelamin}
            onChange={(e) => setJenisKelamin(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="pria">Pria</option>
            <option value="wanita">Wanita</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Hitung Hash
        </button>
      </form>

      {hashResult && (
        <div className="mt-6">
          <h5 className="text-lg font-semibold">Hasil Hashing:</h5>
          <p className="bg-gray-100 p-4 rounded-md break-all">{hashResult}</p>
        </div>
      )}
    </div>
  );
};

export default SoalTujuh;
