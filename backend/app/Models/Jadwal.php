<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jadwal extends Model
{
    use HasFactory;

    // Tambahkan kolom yang dapat di-mass assign
    protected $fillable = [
        'tanggal',
        'jam_mulai',
        'jam_selesai',
        'nama_pengajar',
        'mata_pelajaran',
        'kelas',
        'ruang',
        'keterangan',
    ];
}
