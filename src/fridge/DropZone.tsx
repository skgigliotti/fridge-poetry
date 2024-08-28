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
    }
    return (
        <div 
        onDragOver={enableDropping}
        onDrop={handleDrop}
        onDragEnter={handleDragOverStart}
        onDragLeave={handleDragOverEnd}
        className={ dragOver ? 'hovering drop-zone' : 'drop-zone' }>
        {
          droppedWords.map(function(word, i) {
            return <Word word={word} key={i}/>;
          })
        }
        </div>
    );
}
  
const enableDropping = (event: React.DragEvent<HTMLElement>) => { 
    event.preventDefault();
}
  
export default DropZone;