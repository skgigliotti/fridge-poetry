import './Photo.css';
import { Stage, Layer, Rect, Image, Circle } from 'react-konva';
import useImage from 'use-image';

function Photo({img_url}:any) {
const [image] = useImage(img_url)
  return (
    <div className="photo">
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer id='print'>
            <Image
                image={image} 
                x={20}
                y={70}
                width={300}
                height={200}
                shadowBlur={10}
            />
            </Layer>
            <Layer id='magnet'>
            <Rect
                x={120}
                y={50}
                width={100}
                height={50}
                fill='#5c5b5b'
                shadowBlur={10}
            />
            <Rect
                x={130}
                y={90}
                width={80}
                height={5}
                fill='#535353'
            />
            <Circle x={170} y={35} radius={25} fill="#5c5b5b"/>
            <Circle x={170} y={35} radius={7} fill="#e6e6e6"/>
            
            </Layer>
        </Stage>
        
    </div>
  );
}

export default Photo;
