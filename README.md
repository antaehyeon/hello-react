# # 1 Fundamentals

추가예정

# #2 Project Setup

- exact - 정확히 path 가 일치할때 Route (path는 앞에가 같으면 먼저 route 시키는 속성때문에)
- HashRouter - 굉장히 간단 (그러나 # 표시), Hash 사용
- BrowserRouter - HTML history API 사용
- Redirect - Route 에 선언된 path 외로 접근했을 경우 분기
- Switch - 한번에 오직 하나의 Route만 Render
  - 같은 path로 시작하는 Route 들을 해결 (path="/" - <Redirect />)

## React Router - Composition

> Composition → 2개 이상의 Route를 (동시에) 렌더링 하는 방식

    <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/tv" exact component={TV}></Route>
          **<Route path="/tv/popular" render={() => <h1>Popular</h1>} />**
          <Route path="/search" component={Search}></Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
    </Router>

- 위의 코드는 `/tv/popular` 로 접속했을 때, 위의 tv component 와 render 항목을 같이 렌더링하게 된다.
