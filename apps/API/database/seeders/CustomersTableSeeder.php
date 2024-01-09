<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use \App\Models\Customer as Customer;

class CustomersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // only run the datadase seeder if there is no customers in the database
        if (Customer::count() === 0) {
            $faker = Faker::create();

            for ($i = 0; $i < 100; $i++) {
                Customer::create([
                    'name' => $faker->name,
                    'email' => $faker->unique()->safeEmail,
                    'phone' => $faker->phoneNumber,
                    'addressLine1' => $faker->streetAddress,
                    'addressLine2' => $faker->secondaryAddress,
                    'postCode' => $faker->postcode,
                ]);
            }
        }
    }
}
