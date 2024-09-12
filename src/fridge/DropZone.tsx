import React, { useState } from "react";
import './DropZone.css'; 
import Word from "./Word";
import { Divider } from "antd";

let words: Array<string> = ['hello', 'world']
function DropZone() {
    const [dragOver, setDragOver] = useState(false); 
    const [droppedWords, setWords] = useState(words || []);
    const handleDragOverStart = () => setDragOver(true);
    const handleDragOverEnd = () => setDragOver(false);
    const handleDrop = (event: React.DragEvent<HTMLElement>) => {
        const id = event.dataTransfer.getData('text');
        setWords([...droppedWords, id]);
        setDragOver(false);
    }
    return (
        <div className="drop-zone flex-main">
        <Divider orientation="left" style={{color: "#d9d9d9"}}>Write a poem by dragging words to the space below</Divider>

        <span className="dropped-words">
        {
          droppedWords.map(function(word, i) {
            return <Word word={word} key={i}/>;
          })
        }
        </span>
        <span 
            onDragOver={enableDropping}
            onDrop={handleDrop}
            onDragEnter={handleDragOverStart}
            onDragLeave={handleDragOverEnd}
            className={ dragOver ? 'hovering drop-space' : 'drop-space' }>
        </span>
        </div>    
    );
}
  
const enableDropping = (event: React.DragEvent<HTMLElement>) => { 
    event.preventDefault();
}
  
export default DropZone;