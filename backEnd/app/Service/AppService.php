<?php
namespace App\Service;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Support\DataTablePaginate;

use App\Model\Apps;

class AppService {

    protected $dataTablePaginate;

    public function __construct(DataTablePaginate $dataTablePaginate)
    {
        $this->dataTablePaginate = $dataTablePaginate;
    }

    public function index()
    {
        $query = DB::table('apps')
            ->select('id', 'name as app_name', 'version_ios', 'version_android', 'prize', 'plan_test', 'plan_show_win');

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
        return Apps::findOrFail($id);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $app = Apps::findOrFail($id);
        return $app->update($request->only(
            'name', 'version_ios', 'version_android', 'prize', 'plan_test', 'plan_show_win'
        ));
    }

    public function destroy($id)
    {
        $app = Apps::findOrFail($id);
        return $app->delete();
    }
}
