<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'addressLine1',
        'addressLine2',
        'postCode',
    ];

    protected $casts = [
        'email' => 'string',
        'phone' => 'string',
    ];
}
