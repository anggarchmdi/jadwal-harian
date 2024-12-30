<?php

namespace App\Http\Controllers;

use App\Models\Jadwal;
use Illuminate\Http\Request;

class JadwalController extends Controller
{
    public function index()
    {
        return response()->json(Jadwal::all());
    }

    public function show($id)
    {
        $jadwal = Jadwal::find($id);
        if (!$jadwal) {
            return response()->json(['message' => 'Jadwal not found'], 404);
        }
        return response()->json($jadwal);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'jam_mulai' => 'required',
            'jam_selesai' => 'required',
            'nama_pengajar' => 'required',
            'mata_pelajaran' => 'required',
            'kelas' => 'required',
            'keterangan' => 'nullable',
        ]);

        $jadwal = Jadwal::create($validated);
        return response()->json(['message' => 'Jadwal created successfully', 'data' => $jadwal], 201);
    }

    public function update(Request $request, $id)
    {
        $jadwal = Jadwal::find($id);
        if (!$jadwal) {
            return response()->json(['message' => 'Jadwal not found'], 404);
        }

        $validated = $request->validate([
            'jam_mulai' => 'required',
            'jam_selesai' => 'required',
            'nama_pengajar' => 'required',
            'mata_pelajaran' => 'required',
            'kelas' => 'required',
            'keterangan' => 'nullable',
        ]);

        $jadwal->update($validated);
        return response()->json(['message' => 'Jadwal updated successfully', 'data' => $jadwal]);
    }

    public function destroy($id)
    {
        $jadwal = Jadwal::find($id);
        if (!$jadwal) {
            return response()->json(['message' => 'Jadwal not found'], 404);
        }

        $jadwal->delete();
        return response()->json(['message' => 'Jadwal deleted successfully']);
    }
}
