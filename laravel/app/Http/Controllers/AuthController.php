<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        if(auth()->attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json(['message' => 'Successfully logged in!']);
        }

        return response()->json(['message' => 'Invalid credentials are provided!']);
    }
}
