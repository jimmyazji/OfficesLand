<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'username' => 'Jimmy',
            'first_name' => 'Jimmy',
            'last_name' => 'Yazji',
            'email' => 'jimmy@gmail.com',
            'password' => bcrypt('12345678'),
        ]);
        User::create([
            'username' => 'tarek',
            'first_name' => 'tarek',
            'last_name' => 'halak',
            'email' => 'tarek@gmail.com',
            'password' => bcrypt('12345678'),
        ]);
        if (app()->isLocal()) {
            User::factory(50)->create();
        }
    }
}
