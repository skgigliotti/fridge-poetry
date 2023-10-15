import './Word.css';

function Word({word}:any) {
  return (
    <div className="word">
        <p 
        onDragStart={handleDragStart} draggable='true'>{word}</p>
    </div>
  );
}

const handleDragStart = (event: React.DragEvent<HTMLElement>) => {
  event.dataTransfer.setData('text', event.currentTarget.innerText);
}

export default Word;
