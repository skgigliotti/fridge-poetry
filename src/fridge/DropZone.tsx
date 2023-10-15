import React from "react";
import './DropZone.css'; 

function DropZone() {
    const [ dragOver, setDragOver ] = React.useState(false); 
    const handleDragOverStart = () => setDragOver(true);
    const handleDragOverEnd = () => setDragOver(false);
    return (
        <div 
        onDragOver={enableDropping}
        onDrop={handleDrop}
        onDragEnter={handleDragOverStart}
        onDragLeave={handleDragOverEnd}
        className={ dragOver ? 'hovering' : '' }>
            Drop Area
        </div>
    );
}
  
const enableDropping = (event: React.DragEvent<HTMLElement>) => { 
    event.preventDefault();
}
const handleDrop = (event: React.DragEvent<HTMLElement>) => {
    const id = event.dataTransfer.getData('text');
    console.log(`Somebody dropped an element with id: ${id}`);
}
  
export default DropZone;