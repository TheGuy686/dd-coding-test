<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
*/

/**
 * Create a new customer
 */
Route::post('/customer', [CustomerController::class, 'create'])->name('customers.create');

/**
 * Update an existing customer
 * 
 * @RouteParam: id: Number - The id of the customer
 * 
 */
Route::put('/customer/{id}', [CustomerController::class, 'update'])->name('customers.update');

/**
 * Get all customers:
 * 
 * @RouteParam: page: Number - The index of the paginated page
 * 
 */
Route::get('/customer/all', [CustomerController::class, 'allCustomers']);
// Route::get('/customer/all', 'App\Http\Controllers\CustomerController@allCustomers');
