import React from 'react';
import { Quiz } from '../components/Quiz';
import { Title } from '../components/Title';
import { questions } from '../mock';

function Home(): React.ReactNode {
  return (
    <>
      <div style={{ margin: 'auto', width: 'fit-content' }}>
        <Title text="Hello" />
        <Quiz questions={questions} />
      </div>
    </>
  );
}

export default Home;
