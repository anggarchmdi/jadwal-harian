import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditData() {
  const [formData, setFormData] = useState({
    tanggal: '',
    jam_mulai: '',
    jam_selesai: '',
    nama_pengajar: '',
    mata_pelajaran: '',
    kelas: '',
    ruang: '',
    keterangan: '',
  });
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch data to edit
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/jadwals/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.response || error.message);
        alert(`Error: ${error.response?.data?.message || error.message}`);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/jadwals/${id}`, formData);
      alert('Data berhasil diperbarui!');
      navigate('/');
    } catch (error) {
      console.error('Error updating data:', error.response || error.message);
      alert(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-slate-800 to-sky-700 w-screen h-screen text-white">
        <div className="">
          <h2 className="text-center text-2xl font-bree-serif mb-14">Edit Data Jadwal</h2>
          <form
            className="max-w-3xl mx-auto bg-slate-900 p-8 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label htmlFor="nama_pengajar" className="block text-sm font-semibold mb-2">
                Nama Pengajar
              </label>
              <input
                type="text"
                placeholder='masukkan nama pengajar...'
                id="nama_pengajar"
                name="nama_pengajar"
                value={formData.nama_pengajar}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="tanggal" className="block text-sm font-semibold mb-2">
                Tanggal
              </label>
              <input
                type="date"
                id="tanggal"
                name="tanggal"
                value={formData.tanggal}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none"
                required
              />
            </div>
            <div className="flex justify-between space-x-4">
              <div className="mb-4 w-full">
                <label htmlFor="jam_mulai" className="block text-sm font-semibold mb-2">
                  Jam Mulai
                </label>
                <input
                  type="time"
                  id="jam_mulai"
                  name="jam_mulai"
                  value={formData.jam_mulai}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="jam_selesai" className="block text-sm font-semibold mb-2">
                  Jam Selesai
                </label>
                <input
                  type="time"
                  id="jam_selesai"
                  name="jam_selesai"
                  value={formData.jam_selesai}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between space-x-4">
              <div className="mb-4 w-full">
                <label htmlFor="mata_pelajaran" className="block text-sm font-semibold w-full mb-2">
                  Mata Pelajaran
                </label>
                <input
                  type="text"
                  placeholder='masukkan mapel...'
                  id="mata_pelajaran"
                  name="mata_pelajaran"
                  value={formData.mata_pelajaran}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="kelas" className="block text-sm w-full font-semibold mb-2">
                  Kelas
                </label>
                <input
                  type="text"
                  placeholder='masukkan kelas...'
                  id="kelas"
                  name="kelas"
                  value={formData.kelas}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="ruang" className="block text-sm w-full font-semibold mb-2">
                  Ruang
                </label>
                <input
                  type="text"
                  placeholder='masukkan ruang kelas...'
                  id="ruang"
                  name="ruang"
                  value={formData.ruang}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="keterangan" className="block text-sm font-semibold mb-2">
                Keterangan
              </label>
              <textarea
                id="keterangan"
                name="keterangan"
                placeholder='tambahkan keterangan (Opsional)'
                value={formData.keterangan}
                onChange={handleChange}
                className="w-full px-4 py-2 max-h-32 min-h-10 rounded-md bg-slate-700 text-white focus:outline-none"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 shadow-lg"
            >
              Simpan Perubahan
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditData;
