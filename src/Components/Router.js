import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";
import Detail from "Routes/Detail";

/**
 * exact - 정확히 path 가 일치할때 Route (path는 앞에가 같으면 먼저 route 시키는 속성때문에)
 * HashRouter - 굉장히 간단 (그러나 # 표시), Hash 사용
 * BrowserRouter - HTML history API 사용
 * Redirect - Route 에 선언된 path 외로 접근했을 경우 분기
 * Switch - 한번에 오직 하나의 Route만 Render
 *          같은 path로 시작하는 Route 들을 해결 (path="/" - <Redirect />)
 */
export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/tv/popular" render={() => <h1>Popular</h1>} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
