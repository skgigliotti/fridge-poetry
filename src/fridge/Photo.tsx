import './Photo.css';
import { Card, Image } from 'antd';

function Photo({img_path, alt_text, vertical=false}:any) {
  var img_src = require(`${img_path}`)
  var img_width = '450px'
  var img_height = '300px'
  var padding_bottom = '0'
  var padding_right = '10%'
  if (vertical) {
    img_width = '300px'
    img_height = '450px'
    padding_bottom = '10%'
    padding_right = '0'
  }

  return (
    <Card style={{ borderRadius: '2px', maxHeight: img_height, maxWidth: img_width }}> 
    <Image
      alt={alt_text}
      width="100%"
      height="100%"
      src={img_src}
    />   
    <div style={{ paddingBottom: padding_bottom, paddingRight: padding_right }}></div>
    </Card>
  );
}

export default Photo;
