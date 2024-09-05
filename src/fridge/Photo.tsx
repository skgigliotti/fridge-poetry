import './Photo.css';
import { Card, Image } from 'antd';

function Photo({img_path, alt_text, vertical=false}:any) {
  var img_src = require(`${img_path}`)
  var img_width = '450px'
  var img_height = '300px'
  if (vertical) {
      img_width = '300px'
      img_height = '450px'
  }

  return (
    <Card style={{ maxHeight: img_height, maxWidth: img_width }}> 
    <Image
      alt={alt_text}
      width="100%"
      height="100%"
      src={img_src}
    />   
    </Card>
  );
}

export default Photo;
