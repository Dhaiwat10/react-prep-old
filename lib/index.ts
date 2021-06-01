import { createClient } from '@supabase/supabase-js';
import { Question } from '../types';

const supabaseUrl = 'https://zaywijcumlbyvkrkbsfq.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const getQuestions = async (): Promise<Array<Question>> => {
  let { data: questions, error } = await supabase.from('questions').select('*');
  let output: Array<Question> = [];

  for (let question of questions) {
    console.log(question);
    let newQuestion: Question = {
      answer: question.answer,
      question: question.question,
      options: Object.values(question.options),
    };
    output.push(newQuestion);
  }

  return output;
};
