import React from 'react';

const Sub = () => {

    // 부모 태그가 변경이 되면 연관되어 있는 자식 태그들 전체를 랜더링한다.
    // 불필요한 랜더링이 생기면 성능에 영향을 끼친다.
    // 성능 해결이 가능한 함수 제공!

    return (
    <div>
        <h1>Sub입니다.</h1>
    </div>
    );
};

export default Sub;
