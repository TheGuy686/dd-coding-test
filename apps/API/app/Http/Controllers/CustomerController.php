<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Http\Requests\CreateCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;


class CustomerController extends Controller
{
    public function allCustomers()
    {
        $pageNumber = $request->query('page', 1);

        // $customers = Customer::paginate(10, ['*'], 'page', $pageNumber);

        $customers = [
            "current_page" => 2,
            "data" => [
                [
                    "id" => 11,
                    "name" => "Prof. Leslie Hyatt PhD",
                    "email" => "qbotsford@example.net",
                    "phone" => "+1.269.235.0091",
                    "addressLine1" => "367 Schiller Dam",
                    "addressLine2" => "Apt. 087",
                    "postCode" => "28487-1048",
                    "created_at" => "2024-01-09T19:22:48.000000Z",
                    "updated_at" => "2024-01-09T19:22:48.000000Z"
                ],
                [
                    "id" => 12,
                    "name" => "Liana Beier",
                    "email" => "charlie12@example.org",
                    "phone" => "(386) 533-7597",
                    "addressLine1" => "13349 Clotilde Inlet Suite 255",
                    "addressLine2" => "Apt. 280",
                    "postCode" => "89332-0253",
                    "created_at" => "2024-01-09T19:22:48.000000Z",
                    "updated_at" => "2024-01-09T19:22:48.000000Z"
                ],
            ],
            "first_page_url" => "http://localhost:100/api/customer/all?page=1",
        ];

        return response()->json($customers, 200);
    }

    public function create(CreateCustomerRequest $request)
    {
        // Validated data from the request
        $validatedData = $request->validated();

        // if ($validator->fails()) {
        //     return response()->json($validator->errors(), 400);
        // }

        // Create a new customer
        $customer = Customer::create($validatedData);

        return response()->json($customer, 201);
    }

    public function update(UpdateCustomerRequest $request, $id)
    {
        // Validated data from the request
        $validatedData = $request->validated();

        // Find the customer by ID
        $customer = Customer::find($id);

        if (!$customer) {
            return response()->json(['message' => 'Customer not found'], 404);
        }

        // Update the customer with validated data
        $customer->update($validatedData);

        return response()->json($customer, 200);
    }
}
