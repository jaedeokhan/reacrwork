import { useEffect, useState } from 'react'; // {}로 있으면 export default가 아니라는 것이다.

function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    // 다운로드 받고(통신)
    let downloadData = 5;
    setData(downloadData);
  };

  // 함수 실행 시점은?
  // (1) : App() 함수가 최초 실행될 때(App(0 그림이 최초 그려질 때 )) => (마운트될 때)
  // (2) : 상태 변수가 변경될 때 (그게 dependencyList에 등록되어 있어야함)
  // (3) : 의존리스트 관리를 할 수 있다
  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]); // 두 번째 인자 : 어디에 의존할 건지? 비어두면 onLoad처럼 처음에만 호출이 된다.

  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색하기
      </button>
      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
