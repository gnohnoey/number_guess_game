import { useState } from 'react';

const getRandomTarget = () => Math.floor(Math.random() * 100) + 1;

const NumberGuessGame = () => {
  const [target, setTarget] = useState(getRandomTarget);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setMessage('타겟: ', target);

    const num = Number(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessageg('⚠️ 1부터 100 사이의 숫자를 입력하세요');
      return;
    }

    if(num === target) {
      setMessage(`🎉 정답입니다~~! 답은 ${target}였습니다!`);
    } else if (num < target) {
      setMessage("⬆️ 더 큰 수를 입력하세요")
    } else if( num > target) {
      setMessage("⬇️ 더 작은 수를 입력하세요")
    }
  };

  return (
    <div className="bg-pink-300 flex flex-col items-center gap-8 p-8 shadow-2xl rounded-xl max-w-md">
      <h1 className="text-2xl font-bold">🎯숫자 맞추기 게임🎯</h1>
      <p className="text-gray-100">1~100 사이의 숫자를 맞춰보세요!</p>

      <input
        className="border-2 border-white bg-white rounded-lg px-4 py-2 w-40 text-center focus:outline-none"
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />

      <button
        className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-300"
        onClick={handleSubmit}
      >
        제출
      </button>

      <p className='text-lg font-medium'>
        {message}
      </p>
    </div>
  );
};

export default NumberGuessGame;
