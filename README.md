# LoginExample
React(client) - Nodejs(server) 간 로그인 기능 구현 연습
<hr/>

## React(Client)
### 사용한 모듈
- http-proxy-middleware
- axios
### cors 세팅
- src/ 경로에 setupProxy.js 추가 (w/ http-proxy-middleware)
- axios 요청 시 옵션 추가<br/>
```withCredentials: true```
<hr/>

## Node.js(Server)
### 사용한 모듈
- passport
- passport-local
- express-session
- bcrypt
- cors
### cors 세팅
- 모듈 import 후 middleware 사용 추가<br/>
```app.use(cors({origin: "http://localhost:3000", credentials: true}));```
### passport 구성 [(passport.js)](https://github.com/Wseop/LoginExample/blob/master/server/passport.js)
- serializeUser
- deserializeUser
- LocalStrategy
- 위 3가지 코드 구현 후 server.js에 추가 (순서에 주의!) [(server.js)](https://github.com/Wseop/LoginExample/blob/master/server/server.js)
### bcrypt로 암호화 [(signup.js)](https://github.com/Wseop/LoginExample/blob/master/server/router/signup.js)
- 회원가입 요청이 왔을 경우 pw를 암호화하여 DB에 저장할 때 사용
```
- bcrypt.hashSync(pw, 10);
- 2번째 인자로 salt값 전달 (클수록 암호화가 강력해지지만 속도가 느려짐)
```
- post요청 시 개발자 도구로 payload확인이 가능한 부분이 있는데 https를 쓰면 문제 없다고 함<br/>
### 기능 구현
- login 요청 [(signin.js)](https://github.com/Wseop/LoginExample/blob/master/server/router/signin.js)
```
- post로 id, pw를 받음
- middleware passport.authenticate() 추가
```
- login 상태 체크 [(login-checker.js)](https://github.com/Wseop/LoginExample/blob/master/server/login-checker.js)
```
- req.user의 null여부를 체크하여 결과에 따라 처리
- req.user는 passport 구성 시 deserializeUser에서 넘겨준 값
- login 상태 체크가 필요한 곳에서 middleware로 추가하여 사용
- logout이나 해당 유저의 컨텐츠 전달 등에 사용
```
- logout 요청 [(signin.js)](https://github.com/Wseop/LoginExample/blob/master/server/router/signin.js)
```
- get으로 받아서 logout() 호출
- req.logout(callback);
```
