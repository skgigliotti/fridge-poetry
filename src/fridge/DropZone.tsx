import React, { useState } from "react";
import './DropZone.css'; 
import Word from "./Word";

let words: Array<string> = ['write', 'a', 'poem']
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