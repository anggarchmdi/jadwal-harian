import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // paggination
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
// search
const [searchQuery, setSearchQuery] = useState("");

  const handleAdd = () => {
    navigate('/add-data');
  }

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  }

  const handleDelete = async (id) => {
    if(window.confirm("Apakah Anda Yakin Ingin Mengahapus Data Ini?")) {
      try{
        await axios.delete(`http://127.0.0.1:8000/api/jadwals/${id}`);
        setData(data.filter(item => item.id !== id));
        alert("Data Berhasil DI hapus!")
      } catch (error) {
        console.error("Error deleting data: ", error);
        alert("Gagal Menghapus data, silahkan coba lagi.");
      }
    }
  };

  useEffect(() => {
    // Fetch data from API
    const fetchData = async (page = 1, query= "") => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/jadwals', {
          params: {
            page, 
            search: query,
          },
        });

        setData(response.data);
        setTotalPages(response.data.total_pages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset ke halaman pertama saat pencarian
  };

  return (
    <>
    <Navbar />
    <Footer />
    <div className="bg-gradient-to-r from-slate-800 to-sky-700 w-screen h-screen text-white">
    <div className="p-20">
        <div className="mb-6"></div>
      {loading ? (
        <p className="text-center text-lg">Loading data...</p>
      ) : (
        <div className="overflow-x-auto">
          <div className=" flex justify-between items-center mb-4">
            <button onClick={handleAdd} className='bg-[#ec2828] py-2 px-4 rounded-xl shadow-lg font-bree-serif font-semibold transform transition-all hover:scale-95 hover:bg-[#d53e3e]'>Tambah Data + </button>
            {/* <input type="text" className='w-80 h-10 text-black px-3 rounded-xl' placeholder='cari disini...' value={searchQuery} onChange={handleSearch} /> */}
          </div>

          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-700">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Tanggal</th>
                <th className="border border-gray-300 px-4 py-2">Jam Mulai</th>
                <th className="border border-gray-300 px-4 py-2">Jam Selesai</th>
                <th className="border border-gray-300 px-4 py-2">Nama Pengajar</th>
                <th className="border border-gray-300 px-4 py-2">Mata Pelajaran</th>
                <th className="border border-gray-300 px-4 py-2">Kelas</th>
                <th className="border border-gray-300 px-4 py-2">Ruang</th>
                <th className="border border-gray-300 px-4 py-2">Keterangan</th>
                <th className="border border-gray-300 px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-700 cursor-pointer">
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.tanggal}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.jam_mulai}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.jam_selesai}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.nama_pengajar}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.mata_pelajaran}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.kelas}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.ruang}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.keterangan}</td>
                  <td className='border border-gray-300 flex justify-center py-1 space-x-4'>
                    <button onClick={() => handleEdit(item.id)} className='bg-yellow-500 px-4 py-1 rounded-xl transition-all transform hover:scale-95 duration-300 shadow-xl'>Edit</button>
                    <button onClick={() => handleDelete(item.id)} className='bg-red-500 px-4 py-1 rounded-xl transition-all transform hover:scale-95 duration-300 shadow-xl'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
      </div>
    </>
  );
}

export default Home;
