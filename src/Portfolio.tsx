import { Button, Flex } from 'antd';
import { CameraFilled, GithubFilled, LinkedinFilled } from '@ant-design/icons';

function Portfolio() {
  return (
    <Flex vertical={false} justify='center' align='center'>
        <Button target='blank' style={{ outlineColor: '', borderRadius: '0px', margin:'1em', width:'3em', height:'3em'}} href='https://www.linkedin.com/in/sophia-gigliotti/'>
            <LinkedinFilled style={{fontSize: '24px'}}/>
        </Button>
        <Button target='blank' style={{ borderRadius: '0px', margin:'1em', width:'3em', height:'3em' }} href='https://github.com/skgigliotti'>
            <GithubFilled style={{fontSize: '24px'}}/>
        </Button>
        <Button target='blank' style={{ borderRadius: '0px', margin:'1em', width:'3em', height:'3em' }} href='https://www.flickr.com/photos/201411402@N02/albums/72177720320260147/'>
            <CameraFilled style={{fontSize: '24px'}}/>
        </Button>
    </Flex>
  );
}

export default Portfolio;
