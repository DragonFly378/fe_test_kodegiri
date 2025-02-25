import { useEffect, useState } from "react";

const SoalTigaSampaiEnam = () => {
  const [dataRandom, setDataRandom] = useState([]);
  const tableSize = 10;

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setDataRandom(data);
      })
      .catch((error) => console.error("Gagal mengambil data:", error));
  }, []);
  console.log(dataRandom);

  const handleDelete = (id) => {
    const filteredData = dataRandom.filter((item) => item.id !== id);
    setDataRandom(filteredData);
  };

  const handleRemoveBody = () => {
    const updatedData = dataRandom.map(({ body, ...rest }) => rest);
    setDataRandom(updatedData); // Set the updated data without the 'body' field
  };

  return (
    <>
      <div className="container mx-auto my-20">
        <div className="container mx-auto p-4">
          <button
            onClick={handleRemoveBody}
            className="bg-blue-700 text-white px-2 py-1 rounded-md text-sm"
          >
            Hapus Body
          </button>

          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-300">Title</th>
                <th className="px-4 py-2 border border-gray-300">User ID</th>
                {dataRandom.length > 0 && "body" in dataRandom[0] && (
                  <th className="px-4 py-2 border border-gray-300">Body</th>
                )}
                <th className="px-4 py-2 border border-gray-300">Options</th>
              </tr>
            </thead>
            <tbody>
              {dataRandom.slice(0, tableSize).map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-300">
                    {item?.title}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {item?.userId}
                  </td>
                  {dataRandom.length > 0 && "body" in dataRandom[0] && (
                    <td className="px-4 py-2 border border-gray-300">
                      {item?.body}
                    </td>
                  )}
                  <td className="px-4 py-2 border border-gray-300">
                    <div className="flex flex-row gap-x-2">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded-md text-sm"
                      >
                        Hapus Baris
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SoalTigaSampaiEnam;
