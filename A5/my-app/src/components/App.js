import React from 'react';
import '../App.css';
import List from './List.js';
import Input from "./Input";
import Detail from "./Detail";

function App() {
    return (
        <div>
            <Input/>
            <List/>
            <Detail/>
        </div>
    );
}

// all the component should export
export default App;
