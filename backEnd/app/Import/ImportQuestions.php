<?php

namespace App\Import;

use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

use App\Model\Questions;

class ImportQuestions implements ToModel, WithHeadingRow
{

    /**
     * @param array $row
     * @return Questions
     */
    public function model(array $row)
    {
        return new Questions([
            'app_id'    => $row['id_app'],
            'details'   => $row['question'],
            'a'         => $row['answer_a'],
            'b'         => $row['answer_b'],
            'c'         => $row['answer_c'],
            'd'         => $row['answer_d'],
            'answer'    => $row['result'],
        ]);
    }
}
