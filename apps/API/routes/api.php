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
Route::post('/customer', 'App\Http\Controllers\CustomerController@create')->name('customers.create');

/**
 * Update an existing customer
 * 
 * @RouteParam: id: Number - The id of the customer
 * 
 */
Route::put('/customer/{id}', 'App\Http\Controllers\CustomerController@update')->name('customers.update');

/**
 * Get all customers:
 * 
 * @RouteParam: page: Number - The index of the paginated page
 * 
 */
Route::get('/customer/all', 'App\Http\Controllers\CustomerController@allCustomers');
