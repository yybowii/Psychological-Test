'use client';

import { useState } from 'react';
import StartPage from './components/page/StartPage';
import QuestionPage from './components/page/QuestionPage';
import LoadingPage from './components/page/LoadingPage';
import ResultPage from './components/page/ResultPage';
import MobileFrame from '../components/layout/MobileFrame';

export default function Home() {
  const [page, setPage] = useState('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [flowerScore, setFlowerScore] = useState({
    sakura: 0,
    sunflower: 0,
    lavender: 0,
    camellia: 0,
    tulip: 0,
  });
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswer = (flower) => {
    setFlowerScore((prev) => ({ ...prev, [flower]: prev[flower] + 1 }));
    setSelectedAnswers([...selectedAnswers, flower]);

    if (currentQuestionIndex < 6) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setPage('loading');
      setTimeout(() => setPage('result'), 3000);
    }
  };

  const reset = () => {
    setPage('start');
    setCurrentQuestionIndex(0);
    setFlowerScore({ sakura: 0, sunflower: 0, lavender: 0, camellia: 0, tulip: 0 });
    setSelectedAnswers([]);
  };

  let currentPage = null;
  switch (page) {
    case 'start':
      currentPage = <StartPage onStart={() => setPage('quiz')} />;
      break;
    case 'quiz':
      currentPage = (
        <QuestionPage
          questionIndex={currentQuestionIndex}
          onAnswer={handleAnswer}
        />
      );
      break;
    case 'loading':
      currentPage = <LoadingPage />;
      break;
    case 'result':
      currentPage = <ResultPage score={flowerScore} onRestart={reset} />;
      break;
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[url('/bg-texture.png')] bg-repeat overflow-hidden">
      <MobileFrame>{currentPage}</MobileFrame>
    </div>
  );
}
