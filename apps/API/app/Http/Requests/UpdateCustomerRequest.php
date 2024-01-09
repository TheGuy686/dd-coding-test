<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCustomerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'         => 'required|string',
            'email'        => 'required|email|unique:customers,email,' . $this->id,
            'phone'        => 'required|string',
            'addressLine1' => 'required|string',
            'addressLine2' => 'nullable|string',
            'postCode'     => 'required|string',
        ];
    }
}
