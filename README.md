# react
- 웹 페이지 가 아니라, 웹 애플리케이션이라는 개념 적용
- 브라우저 상에서 정말 자연스러운 흐름으로 매우 많은것들을 할 수가 있음
- 귀찮은 DOM 관리와 상태값 업데이트 관리를 최소화하고, 오직 기능 개발, 그리고 사용자 인터페이스를 구현하는 것에 집중하도록 하는 프레임워크 등장
  - Angular
  - Ember
  - Backbone
  - Vue
  - React
## Angular
- UI 를 구현하게 되면서, 앵귤러만의 문법같은 것들이 다양하게 존재
- 라우터, HTTP 클라이언트 등 웹 프로젝트에서 필요한 대부분의 도구들이 프레임워크 안에 내장
## React
- “컴포넌트” 라는 개념에 집중이 되어있는 라이브러리
- 데이터를 넣으면 우리가 지정한 유저 인터페이스를 조립해서 보여줌
- HTTP 클라이언트, 라우터, 심화적 상태 관리 등의 기능들은 내장되어있지 않음
## Vue
- 입문자가 사용하기에, 정말 쉬움
- 대부분 Webpack 같은 모듈 번들러를 사용하여 프로젝트를 구성해야하는 앵귤러와 리액트와 달리, 단순히 CDN 에 있는 파일을 로딩 하는 형태로 스크립트를 불러와서 사용하기도 편함
- HTML 을 템플릿처럼 그대로 사용 할 수도 있음
- 공식 라우터, 상태관리 라이브러리가 존재
## React 소개
- 리액트 메뉴얼의 소개글
  - We built React to solve one problem: building large applications with data that changes over time
  - 우리는 지속적으로 변하는 데이터를 가진 대규모 애플리케이션을 구축하기 위해 React를 만들었습니다
#### Facebook은 왜 React를 만들었을까?
- 기존의 프레임워크들의 모델들은 양방향 바인딩을 통하여 모델에 있는 값이 변하면, 뷰에서도 이를 변화시켜줌
- 일단 첫 화면을 보여주고, 변화에 따라 필요한곳을 바꿔줌  
  - **”변화(Mutation)”**라는것은 상당히 복잡한 작업입니다. 특정 이벤트가 발생했을때, 모델에 변화를 일으키고, 변화를 일으킴에 따라 어떤 DOM 을 가져와서 어떠한 방식으로 뷰를 업데이트 해줄 지 로직을 정해줘야 함
- Facebook는 아래와 같은 발상을 함
  - 그냥 Mutation 을 하지 말자. 그 대신에, 데이터가 바뀌면 그냥 뷰를 날려버리고 새로 만들어버리면 어떨까?
  - 성능적으로 엄청난 문제가 생김
  - 해결책은 Virtual DOM
- Virtual DOM
  - 변화가 일어나면, 실제로 브라우저의 DOM 에 새로운걸 넣는것이 아니라, 자바스크립트로 이뤄진 가상 DOM 에 한번 렌더링을 하고, 기존의 DOM 과 비교를 한 다음에 정말 변화가 필요한 곳에만 업데이트를 해주는 것
  - 데이터가 바뀌었을 때 더 이상 어떻게 업데이트 할 지를 고려하는게 아니라, 그냥 일단 바뀐 데이터로 일단 그려놓고 비교를 한다음에, 바뀐 부분만 찾아서 바꿔줌
#### Virtual DOM을 쓰는 다른 라이브러리
- Vue
- Marko
- Maquette
- Mithril
#### React의 장점
- 엄청난 생태계
- 사용하는 곳이 많음 (Aribnb, BBC, Cloudflare, Codecademyy, Coursera, Dailymotion, eBay....)
- React 라이브러리는 뷰 쪽만 관리하게 하고, 나머지 기능은 써드 파티 라이브러리가 담당
- 라우터, 혹은 상태관리 같은 기능들이 리액트 자체에 내장되어있지도 않지만, 공식적인 라이브러리도 없지만, 써드파티 라이브러리가 존재
  - 라우터: React-router, 그리고 Next.js, After.js 같은 라이브러리
  - 상태 관리 라이브러리: Redux, MobX, fr(e)actal
## React 프로젝트 시작하기
- jQuery와 같이 단순히 ``<script src="..."><script>`` 의 형태로 불러와서 사용하지 않음
- React 프로젝트를 제대로 작업 하려면 Node, yarn, Webpack, Babel 등의 도구를 설치하여 프로젝트를 설정
- Facebook에서 제공해주는 도구create-react-app를 통하여 이 작업을 간단하게 준비
#### Webpack, Babel의 용도
- React프로젝트는 컴포넌트들을 여러가지 파일로 분리해서 저장하고, 또 이 컴포넌트들은 일반 자바스크립트가 아닌 JSX 라는 문법으로 작성
- 여러가지의 파일을 한개로 결합하기 위해서 우리는 Webpack 이라는 도구를 사용
- JSX 를 비롯한 새로운 자바스크립트 문법들을 사용하기 위해서 우리는 Babel 이라는 도구를 사용
#### 준비 사항
1. Node.js
  - Webpack과 Babel같은 도구들이 자바스크립트 런타임인 Node.js 를 기반으로 만들어져 있음
  - 해당 도구들을 사용하기 위해서 Node.js 를 설치
2. Yarn
  - 조금 개선된 버전의 npm 이라고 생각하면 됨
  - npm 은 Node.js 를 설치하게 될 때 같이 딸려오는 패키지 매니저 도구
  - 프로젝트에서 사용되는 라이브러리를 설치하고 해당 라이브러리들의 버전 관리를 하게 될 때 사용
3. Source Editor
  - 주로 VS Code를 사용
4. Git
#### Node.js 설치
- 윈도우의 경우에 노드 공식 홈페이지 다운로드 페이지 에서 설치
- macOS, Linux 의 경우 다음과 같이 nvm 을 통해서 설치
  - nvm 은 여러 종류의 Node.js 버전을 설치 할 수 있게 해주는 버전
  - 나중에 새 버전이 나왔을 때 업데이트 하기도 쉽고, 터미널을 통해 어떤 버전을 사용 할지 설정 할 수도 있음
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
nvm install --lts
```    
#### Yarn 설치
-  [Yarn Installation 페이지](https://yarnpkg.com/en/docs/install)에서 여러분의 운영체제에 맞는 방식에 따라 설치
#### create-react-app 설치 및 사용
- 리액트 앱을 만들어주는 도구
###### 설치
- npm을 통한 설치
```bash
npm install -g create-react-app
```
- yarn을 통한 설치
```bash
yarn global add create-react-app
```
- 리눅스, 혹은 macOS 유저여서 nvm을 통하여 Node.js 를 설치했다면, 환경 변수를 추가
```bash
# macOS:
echo 'export PATH="$(yarn global bin):$PATH"' >> ~/.bash_profile
# Linux:
echo 'export PATH="$(yarn global bin):$PATH"' >> ~/.bashrc
```
###### 사용
- 새로운 single page app을 빌드하기 위한 도구
```bash
create-react-app my-app
cd my-app
yarn start
```
```bash
npx create-react-app my-app
cd my-app
npm start
```
#### Component 파일 분석
- React를 사용하면 웹 애플리케이션에서 사용하는 유저 인터페이스를 재사용 가능한 컴포넌트로 분리하여 작성함으로서, 프로젝트의 유지보수성을 우수하게 해줌
- 컴포넌트에 해당하는 코드는, App.js 에서 확인할 수 있음
###### App.cs 분석
```java
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
```
- 첫번째 줄은 React와 그 내부의 Component 를 불러옴
  - 파일에서 JSX 를 사용하려면, 꼭 React 를 import 해주어야 함
- 여러 파일들을 import 하는 것은, webpack 을 사용하기에 가능한 작업
  - 프로젝트를 빌드할 때 webpack에서 파일의 확장자에 따라 다른 작업을 처리
#### 컴포넌트를 만드는 두가지 방법
- 클래스 형태와 함수형 형태가 존재
- 클래스 형태의 컴포넌트
  - render 함수가 존재해야 함
  - 내부에서는 JSX 를 return 해주어야 함
  - 아래의 HTML 같은 코드가 JSX임
  - 작성한 컴포넌트를 다른 곳에서 불러와서 사용 할 수 있도록 내보내기를 해줌
  - index.js 파일을 보면 App.js를 임포트해서 사용
    - 브라우저 상에 React 컴포넌트를 보여주기 위해서 ReactDOM.render 함수를 사용
    - 첫번째 파라미터는 렌더링 할 결과물이고, 두번째 파라미터는 컴포넌트를 어떤 DOM Element에 그릴지 정해줌
    - id 가 root 인 DOM을 찾아서 그리도록 설정이 되어있는데, 해당 DOM은 public/index.html 파일에 존재
```javascript
// App.js
class App extends Component {
  ...
}
```
```java
render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
```
```javascript
// App.js
export default App;
```
```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```
#### JSX
- 얼핏 보기에는 html 같지만, 자바스크립트임
- HTML 과 비슷한 문법으로 작성을 하면 이를 React.createElement를 사용하는 자바스크립트 형태로 변환
![변환 예](./images/HtmlToJavascript.png)
###### JSX 규칙
- 태그는 꼭 닫혀있어야 함
  - ``<div>`` 태그를 열었으면, ``</div>`` 를 통하여 태그를 꼭 닫아주어야 함
- 두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져야 함
  - 아래의 코드는 에러가 발생
```javascript
// src/App.js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        Hello
      </div>
      <div>
        Bye
      </div>
    );
  }
}

export default App;
```
- 해결책
  - 방법1: 새로운 div로 감쌈
  - 방법2: Fragment를 사용
```javascript
import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          Hello
        </div>
        <div>
          Bye
        </div>
      </Fragment>
    );
  }
}

export default App;
```
###### JSX안에 자바스크립트 값 사용하기
- JSX 내부에서 자바스크립트 값을 사용 할 땐 아래와 같이 사용
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    const name = 'react';
    return (
      <div>
        hello {name}!
      </div>
    );
  }
}

export default App;
```
###### var, const, let
- const, let은 ES6에 도입된 키워드
- var의 scope는 함수 단위이고, const와 let의 scope는 블록 단위
- ES6에서는 var을 사용할 필요가 없음
  - 값을 선언 후 바꿔야 할 땐 let, 바꾸지 않을 땐 const를 사용
```javascript
function foo() {
  var a = 'hello';
  if (true) {
    var a = 'bye';
    console.log(a); // bye
  }
  console.log(a); // bye
}
```
```javascript
function foo() {
  let a = 'hello';
  if (true) {
    let a = 'bye';
    console.log(a); // bye
  }
  console.log(a); // hello
}
```
###### 조건부 렌더링
- 보통 삼항 연산자를 사용하거나, AND 연산자를 사용
- if 문을 사용 할 수는 없고, 사용하려면 IIFE(즉시 실행 함수 표현) 을 사용해아 함
- 삼항연산자
  - true 일 때와 false 일 때 다른것들을 보여주고 싶을 떄 사용
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {
          1 + 1 === 2 
            ? (<div>맞아요!</div>)
            : (<div>틀려요!</div>)
        }
      </div>
    );
  }
}

export default App;
```
- AND 연산자
  - 조건이 true 일 때만 보여주고, false 경우 아무것도 보여주고 싶지 않을 때 사용
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {
          1 + 1 === 2 && (<div>맞아요!</div>)
        }
      </div>
    );
  }
}

export default App;
```
- IIFE 사용
  - 복잡한 조건을 작성해야 할 때 사용
  - 그러한 조건들은 웬만하면 JSX 밖에서 로직을 작성하는것이 좋음
  - 꼭 JSX 내부에서 작성해야 한다면, 아래와 같이 IIFE 를 사용
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    const value = 1;
    return (
      <div>
        {
          (function() {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
    );
  }
}

export default App;
```
- 위의 함수를  this, arguments, super 개념이 없는 익명 함수로 표현 가능
  - 화살표 함수라고 부름
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    const value = 1;
    return (
      <div>
        {
          (() => {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
    );
  }
}
```
###### style 과 className
- JSX 에서 style 과 CSS 클래스를 설정 할 때, 아래와 같은 형태로 작성
- React에서는 객체 형태로 작성해주셔야 함
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };

    return (
      <div style={style}>
        hi there
      </div>
    );
  }
}

export default App;
```
- 클래스를 설정하게 될 때에는 html 에서는 ``<div class="hello">`` 사용
- React 컴포넌트에서는 class 대신에 className 을 사용
```css
.App {
  background: black;
  color: aqua;
  font-size: 36px;
  padding: 1rem;
  font-weight: 600;
}
```
```javascript
import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        리액트
      </div>
    );
  }
}

export default App;
```
###### 주석
- ``{/* ... */}`` 사이에 넣거나, 태그 사이에 넣을 수도 있음
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/* 주석은 이렇게 */}
        <h1
          // 태그 사이에
        >리액트</h1>
      </div>
    );
  }
}

export default App;
```