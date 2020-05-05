<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Service\QuestionService;
use Maatwebsite\Excel\Facades\Excel;
use App\Import\ImportQuestions;

class QuestionController extends Controller
{
    protected $questionService;

    public function __construct(QuestionService $questionService)
    {
        //
        $this->questionService = $questionService;
    }

    public function index()
    {
        //
        return $this->respondSuccess($this->questionService->index());
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return $this->respondSuccess($this->questionService->store($request));
    }

    public function show($id)
    {
        return $this->respondSuccess($this->questionService->show($id));
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        return $this->respondSuccess($this->questionService->update($request, $id));
    }

    public function destroy($id)
    {
        return $this->respondSuccess($this->questionService->destroy($id));
    }

    /**
     *
     */
    public function import()
    {
        Excel::import(new ImportQuestions, request()->file('files'));
        return back();
    }

}
