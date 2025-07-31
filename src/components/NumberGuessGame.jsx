import { useState } from 'react';

const getRandomTarget = () => Math.floor(Math.random() * 100) + 1;

const NumberGuessGame = () => {
  const [target, setTarget] = useState(getRandomTarget);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [isWin, setIsWin] = useState(false);
  const [history, setHistory] = useState([]);

  const handleSubmit = () => {
    setMessage('타겟: ', target);

    const num = Number(guess);
    if (isNaN(num) || num < 1 || num > 100) {
      setMessage('⚠️ 1부터 100 사이의 숫자를 입력하세요');
      return;
    }

    setHistory([...history, num]);

    if (num === target) {
      setMessage(`🎉 정답입니다~~! 답은 ${target}였습니다!`);
      setIsWin(true);
    } else if (num < target) {
      setMessage('⬆️ 더 큰 수를 입력하세요');
    } else if (num > target) {
      setMessage('⬇️ 더 작은 수를 입력하세요');
    }

    setGuess('');
  };

  const handleRestart = () => {
    setTarget(getRandomTarget);
    setMessage('');
    setIsWin(false);
    setHistory([]);
  };

  return (
    <div className="bg-pink-300 flex flex-col items-center gap-8 p-8 shadow-2xl rounded-xl max-w-md">
      <h1 className="text-2xl font-bold">🎯숫자 맞추기 게임🎯</h1>
      <p className="text-gray-100">1~100 사이의 숫자를 맞춰보세요!</p>
      <input
        className="border-2 border-white bg-white rounded-lg px-4 py-2 w-40 text-center focus:outline-none disabled:opacity-50"
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={isWin}
      />
      <button
        className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-300"
        onClick={handleSubmit}
        disabled={isWin}
      >
        제출
      </button>
      <p className="text-lg font-medium">{message}</p>
      <div className="w-full">
        <h2 className="font-semibold mb-2 text-gray-500">입력 횟수 {history.length}</h2>
        <ul className="list-disc list-inside text-sm text-gray-500">
          {history.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
      {isWin && (
        <button
          className="bg-blue-400 text-white mt-4 px-5 py-2 border-gray-400 rounded-lg hover:bg-gray-200"
          onClick={handleRestart}
        >
          다시 시작
        </button>
      )}{' '}
      {/*&& == 앞의 조건을 만족해야 뒤의 ui가 보임*/}
    </div>
  );
};

export default NumberGuessGame;
