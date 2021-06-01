import React, { useEffect, useState } from 'react';
import { Quiz } from '../components/Quiz';
import { Title } from '../components/Title';
import { getQuestions } from '../lib';
import { Question } from '../types';

function Home(): React.ReactNode {
  const [questions, setQuestions] = useState<Array<Question>>([]);

  useEffect(() => {
    getQuestions().then((res) => setQuestions(res));
  }, []);

  return (
    <>
      <div style={{ margin: 'auto', width: 'fit-content' }}>
        <Title text="Hello" />
        {questions.length > 0 && <Quiz questions={questions} />}
      </div>
    </>
  );
}

export default Home;
