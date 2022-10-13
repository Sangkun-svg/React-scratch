- Div soup
  : JSX의 요구사항을 지키기 위해 큰 의밍없는 Div tag 사용하여 유저가 최종적으로 보이는 페이지에 의미없는 Div tag가 많아지는 것.

  - Problem
    1. 의도하지 않은 스타일링이 나올수도 있다.
    2. 너무 많은 Html 요소를 렌더링하면 성능저하가 올 수 있다.
  - Solution
    1. children attr을 사용하여 tag를 여닫지 않고 자식 컴포넌트를 바로 렌더링하는 custom component를 생성하여 방지할 수 있다.
    2. React.Fragment 태그를 이용한다.
    3. short syntax를 사용한다. 사용 시 tag에 attributes나 key를 적어줄 수 없다는 단점도 있다.

- Portal (공식문서 읽어보기 : https://ko.reactjs.org/docs/portals.html)
  기본적으로 모달(Modal)은 페이지 위에 표시되는 오버레이(overlay)

  - Needs
    1. component를 이동시킬 장소
    2. component에게 이동 할 장소에 portal을 가져야 한다고 얄려줘야한다.

- Ref (공식문서 읽어보기 : https://ko.reactjs.org/docs/refs-and-the-dom.html)
  다른 DOM 요소에 접근하여 그 요소들로 작업할 수 있게 해주는 것
  감이 안잡히네 ㅇㅅaㅇ...
  -> 제어 컴포넌트와 제어되지 않은 컴포넌트

  - ref로 값에 접근하는 경우 제어되지 않은 컴포넌트가 된다.
    -> 왜? 이것들은 내부 state이기 때문에 react에 의해 관리(제어)되지 않는다

- Effects
  - Side Effect
- Reducer

  - useReducer 은 state 관리를 도와준다
  - 강력한 state 관리(특정 상황에서)가 필요할 때 useState 대신 사용할 수 있다.
  - 사용하기 복잡하기 때문에 대부분의 경우에는 useState를 사용하게 더 좋다.

- Context
  - Context를 사용하기 위해선 공급(Provide) 과 소비(Consume)가 이루어져야한다.
    - 여기서 말하는 공급은 Context로 JSX 코드로 감싼다는것을 의미한다.
