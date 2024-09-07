import { Button, Flex } from 'antd';
import { GithubFilled, InstagramFilled, LinkedinFilled } from '@ant-design/icons';

function Portfolio() {
  return (
    <Flex vertical={false} justify='center' align='center'>
        <Button style={{ outlineColor: '', borderRadius: '0px', margin:'1em', width:'3em', height:'3em'}} href='https://www.linkedin.com/in/sophia-gigliotti/'>
            <LinkedinFilled style={{fontSize: '24px'}}/>
        </Button>
        <Button style={{ borderRadius: '0px', margin:'1em', width:'3em', height:'3em' }} href='https://github.com/skgigliotti'>
            <GithubFilled style={{fontSize: '24px'}}/>
        </Button>
        <Button style={{ borderRadius: '0px', margin:'1em', width:'3em', height:'3em' }} href='https://instagram.com/sophtwaredev'>
            <InstagramFilled style={{fontSize: '24px'}}/>
        </Button>
    </Flex>
  );
}

export default Portfolio;
