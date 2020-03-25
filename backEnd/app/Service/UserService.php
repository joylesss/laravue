<?php
namespace App\Service;

use App\Support\DataTablePaginate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Model\Users;

class UserService {

    protected $dataTablePaginate;

    public function __construct(DataTablePaginate $dataTablePaginate)
    {
        $this->dataTablePaginate = $dataTablePaginate;
    }

    public function index()
    {
        $query = DB::table('users')
            ->select('id', 'name as user_name', 'phone', 'fb_id', 'fb_email');

        return  $this->dataTablePaginate->scopeDataTablePaginate($query);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        return Users::findOrFail($id);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $user = Users::findOrFail($id);
        return $user->update($request->only(
            'name', 'phone', 'fb_email'
        ));
    }

    public function destroy($id)
    {
        $user = Users::findOrFail($id);
        return $user->delete();
    }
}
