<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JadwalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('jadwals')->insert([
            [
                'jam_mulai' => '08:00',
                'jam_selesai' => '10:00',
                'nama_pengajar' => 'Budi Santoso',
                'mata_pelajaran' => 'Matematika',
                'kelas' => '3 SMA 1',
                'keterangan' => 'Persiapan Ujian Nasional',
            ],
            [
                'jam_mulai' => '10:30',
                'jam_selesai' => '12:30',
                'nama_pengajar' => 'Ani Kartika',
                'mata_pelajaran' => 'Fisika',
                'kelas' => '2 SMA 1',
                'keterangan' => 'Remedial Bab Gerak',
            ],
        ]);

    }
}
