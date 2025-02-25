import { useState } from "react";
import { laporanMurajaah } from "../../constant";

const SoalSatuSampaiDua = () => {
  const [currentTable, setCurrentTable] = useState(1);
  const tableSize = 1;

  const currentData = laporanMurajaah.slice(
    (currentTable - 1) * tableSize,
    currentTable * tableSize
  );

  return (
    <div className="container mx-auto p-4">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">Nama</th>
            <th className="px-4 py-2 border border-gray-300">Jenis</th>
            <th className="px-4 py-2 border border-gray-300">Surat</th>
            <th className="px-4 py-2 border border-gray-300">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border border-gray-300">{item.Nama}</td>
              <td className="px-4 py-2 border border-gray-300">{item.Jenis}</td>
              <td className="px-4 py-2 border border-gray-300">{item.Surat}</td>
              <td className="px-4 py-2 border border-gray-300">
                {item.Keterangan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setCurrentTable(currentTable - 1)}
          disabled={currentTable === 1}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentTable(currentTable + 1)}
          disabled={currentTable * tableSize >= laporanMurajaah.length}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SoalSatuSampaiDua;
