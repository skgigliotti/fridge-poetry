import './Photo.css';
import { Stage, Layer, Rect, Image, Circle } from 'react-konva';

function Photo({img_path, vertical=false}:any) {
  const image = new window.Image()
  image.src = require(`${img_path}`)
  var img_width = 450
  var img_height = 300
  if (vertical) {
      img_width = 300
      img_height = 450
  }
  var mag_x = img_width * 0.40
  var mag_y = img_height * 0.16

  return (
    <div className="photo">
        <Stage width={img_width + 50} height={img_height + 100}>
            <Layer id='print'>
            <Image
                image={image}
                x={20}
                y={90}
                width={img_width}
                height={img_height}
                shadowBlur={10}
            />
            </Layer>
            <Layer id='magnet' x={mag_x} y={mag_y}>
            <Rect
                x={0}
                y={0}
                width={100}
                height={50}
                fill='#5c5b5b'
                shadowBlur={10}
            />
            <Rect
                x={10}
                y={40}
                width={80}
                height={5}
                fill='#535353'
            />
            <Circle x={50} y={-5} radius={25} fill="#5c5b5b"/>
            <Circle x={50} y={-5} radius={9} fill="#d9d7d7" shadowBlur={1}/>
            </Layer>
        </Stage>
    </div>
  );
}

export default Photo;
