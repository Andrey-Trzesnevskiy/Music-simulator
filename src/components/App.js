import ArticleList from "./ArticleList";
import React from "react";
import articles from '../fixtures';
import KeyBoard from "./KeyBoard/Keyboard"

function App() {
    return (
        <div>
            <h1>Music simulator</h1>
            {/* <ArticleList articles={articles}/> */}
            <KeyBoard/>
        </div>
    )
}

export default App;