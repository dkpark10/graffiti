### 깃 컨벤션 

커밋 타입은 태그와 제목으로 구성 태그는 대괄호로 작성한다. 
제목의 종류는 다음과 같다.

#### 제목

add: 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 컨벤션, 코드 변경없는 경우, style 수정
refac: 코드 리팩토링
test: test 코드 작성

#### 본문

본문은 최대한 상세히 작성

## 이슈

#### blur 이벤트와 click 이벤트 다루기

문제: 검색결과창 아이템 클릭 시 상세페이지로 넘어가야 하는데 blur 이벤트가 먼저 발생해 넘어가지지 않는 문제

원인: 클릭 이벤트 발생 시 mousedown -> mouseup -> click 이벤트 순서대로 발생 
blur 이벤트는 focus가 되지 않을 때 발생하므로 click 이벤트보다 먼저 발생

해결: mousedown 이벤트로 핸들링 한다.

#### 이벤트 핸들러 this

문제: 이벤트 핸들러 함수 내부 this에 다루기

원인: 

```
DomElement.addEventListener("click", function (e){
	this.func();
});
```
자바스크립트에서 이벤트 핸들러 함수 내부 this는 이벤트 리스너에 바인딩된  currentTarget을 
가리킨다. 위 코드에서는 DomElement를 가리킨다. this.func()함수를 실행해야 할 때 this를 동적으로 가리키도록 해야 한다. 

해결: 상위 스코프의 this를 가리키도록 화살표 함수를 사용한다.

```
DomElement.addEventListener("click", e => {
	this.func();
});
```