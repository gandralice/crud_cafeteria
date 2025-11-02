<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Produto::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'produto' => 'required|string|max:255',
            'fornecedor' => 'required|string|max:255',
            'tipo' => 'required|string|max:255',
            'preco_venda' => 'required|numeric',
            'data_validade' => 'required|date',
        ]);

        $produto = Produto::create($request->all());
        return response()->json($produto, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Produto $produto)
    {
        return $produto;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produto $produto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Produto $produto)
    {
        $request->validate([
            'produto' => 'required|string|max:255',
            'fornecedor' => 'required|string|max:255',
            'tipo' => 'required|string|max:255',
            'preco_venda' => 'required|numeric',
            'data_validade' => 'required|date',
        ]);

        $produto = Produto::findOrFail($id);
        $produto->update($request->all());
        return response()->json($produto);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produto $produto)
    {
        $produto->delete();
        return response()->noContent();
    }
}
