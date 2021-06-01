import React from 'react';
import { Question } from '../components/Question';
import { Title } from '../components/Title';

function Home(): React.ReactNode {
  return (
    <>
      <Title text="Hello" />
      <Question
        question="Choose the correct option."
        answer="b"
        options={['Option A', 'Option B', 'Option C', 'Option D']}
      />
    </>
  );
}

export default Home;
