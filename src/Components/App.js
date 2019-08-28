import React from "react";
import Router from "./Router";

/**
 * Fragment 사용 - React 에서는 2개의 컴포넌트를 리턴할 수 없기 때문에
 */
function App() {
  return (
    <>
      <Router></Router>
    </>
  );
}

export default App;
