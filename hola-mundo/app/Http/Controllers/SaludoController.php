<?php

namespace App\Http\Controllers;

class SaludoController extends Controller
{
    public function index()
    {
       
        $mensaje = 'Hola mundo desde la vida de AnyFer';
        $nombre = 'Anny';
        $asignatura = 'ISC-305 Programación Web';
        $carrera = 'Ingeniería en Sistemas';

       return view('hola', [
        'mensaje' => $mensaje,
        'nombre' => $nombre,
        'asignatura' => $asignatura,
        'carrera' => $carrera
]);
    }
}