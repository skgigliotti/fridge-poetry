import './Word.css';
import { Card } from "antd";

function Word({word}:any) {
  return (
    <span 
        onDragStart={handleDragStart} draggable='true'>
    <Card className="word" size="small" style={{ boxShadow: '#000000', borderRadius: '0px', padding:'0px' }}>
        {word}
    </Card>
    </span>
  );
}

const handleDragStart = (event: React.DragEvent<HTMLElement>) => {
  event.dataTransfer.setData('text', event.currentTarget.innerText);
}

export default Word;
