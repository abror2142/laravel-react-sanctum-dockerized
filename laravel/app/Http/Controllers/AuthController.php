<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

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

    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => ['required', 'max:255'],
            'email' => ['required', 'email'],
            'password' => ['required', 'confirmed']
        ]);

        if(User::find(['email' => $request->email])->exists()){
            return response()->json(['message' => 'This email is already taken.'], 400);
        }

        $user = User::create($fields);
        $user->createToken($request->device_name)->plainTextToken;

        return response()->json(['message' => 'Successfully registered!', 'user' => $user]);
    }

    public function logout()
    {
        $user = auth()->user();
        $user->tokens()->delete();
        return response()->json(['message' => 'Successfully logged out!']);
    }
}
