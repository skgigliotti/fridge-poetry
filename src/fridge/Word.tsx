import './Word.css';
import { Card } from "antd";

function Word({word, fontSize='24px'}:any) {
  return (
    <span 
        onDragStart={handleDragStart} draggable='true'>
      <Card className="word" size="small" style={{ cursor:'pointer', boxShadow: '#000000', borderRadius: '0px', padding:'0px', fontSize: `${fontSize}` }}>
          {word}
      </Card>
    </span>
  );
}

const handleDragStart = (event: React.DragEvent<HTMLElement>) => {
  event.dataTransfer.setData('text', event.currentTarget.innerText);
}

export default Word;
