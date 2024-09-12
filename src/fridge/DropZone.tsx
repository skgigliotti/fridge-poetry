import React, { useState } from "react";
import './DropZone.css'; 
import Word from "./Word";
import { Divider, Flex } from "antd";

let words: Array<string> = []
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
        <div className="flex-main">
        <Divider orientation="left" style={{ color: "#d9d9d9" }}>Write a poem by dragging words to the space below</Divider>
        <Flex 
            wrap
            style={{ display: 'flex' }}
            vertical={false}
            onDragOver={enableDropping}
            onDrop={handleDrop}
            onDragEnter={handleDragOverStart}
            onDragLeave={handleDragOverEnd}
            className={ dragOver ? 'hovering drop-space' : 'drop-space' }>

        {
          droppedWords.map(function(word, i) {
            return <Word word={word} key={i}/>;
          })
        }
        </Flex>
        </div>    
    );
}
  
const enableDropping = (event: React.DragEvent<HTMLElement>) => { 
    event.preventDefault();
}
  
export default DropZone;