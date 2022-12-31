import { useState } from 'react';

function App() {
  console.log('App 실행됨');

  let [num, setNum] = useState(5);

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '이순신' },
  ];

  // 다운로드 받음
  const [users, setUsers] = useState(sample);

  const download = () => {
    setUsers([...sample, { id: num, name: '조자룡' }]);
    setNum(num + 1);
  };

  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((user) => (
        <h1 key={user.id}>
          {user.id}, {user.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
