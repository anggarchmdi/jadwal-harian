<?php

use App\Http\Controllers\JadwalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/jadwals', [JadwalController::class, 'index']); // Get all jadwals
Route::get('/jadwals/{id}', [JadwalController::class, 'show']); // Get specific jadwal by ID
Route::post('/jadwals', [JadwalController::class, 'store']); // Create a new jadwal
Route::put('/jadwals/{id}', [JadwalController::class, 'update']); // Update an existing jadwal
Route::delete('/jadwals/{id}', [JadwalController::class, 'destroy']); // Delete a jadwal

