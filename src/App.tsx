import React from 'react';
import './App.css';
import Contents from './components/0GeK';
import {LinkedinOutlined,InstagramOutlined,TwitterOutlined,GithubOutlined} from '@ant-design/icons';
import { Flex, Layout,Button ,Space} from 'antd';

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  marginTop:30,
  backgroundColor: 'white',
};

const footerStyle: React.CSSProperties = {
  margin:'60px 0px 60px 0px',
  borderRadius:10
};

const layoutStyle = {
  backgroundColor:'white',
  overflow: 'hidden',
  margin:'0 80px 0 80px'
};

const App:React.FC=()=>{
  return(
    <Flex gap="middle" wrap="wrap">
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <nav className='navbar'>
          <Button type="primary" className='b'>pH Logo</Button>
          <div >
            <div className='aa'>
              <span className='ss'>Home</span>
              <span className='ss'>About Us</span>
              <span className='ss'>Products</span>
              <span className='ss'>Blog</span>
              <span className='ss'>Pricing</span>
            </div>
          </div>
          <div>
            <a href='https://www.google.com/gmail/about/'>Sign in</a>
            <Button type="primary" className='fc'>Sign up & Try Now</Button>
          </div>
        </nav>
      </Header>
      <Content ><Contents/></Content>
      <Footer style={footerStyle}>
          <div className='phlogo'>
            <div className='foot'>
                <h1>pH Logo</h1>
                <p>The range goes from 0 - 14, with 7 being neutral. pHs of less than 7 indicate acidity, whereas</p>
                <Space>
                    <LinkedinOutlined />
                    <InstagramOutlined />
                    <TwitterOutlined />
                    <GithubOutlined />
                </Space>
            </div>
            <div className='foot'>
                <h1>Borem</h1>
                <div className='borem'>
                    <span>Dorem</span>
                    <span>worem</span>
                    <span>Lorem</span>
                    <span>phorem</span>
                </div>
            </div>
            <div className='foot'>
                <h1>Dorem</h1>
                <div className='borem'>
                    <span>Yorem</span>
                    <span>Borem</span>
                    <span>Korem</span>
                    <span>Jhorem</span>
                </div>
            </div>
            <div className='foot'>
                <h1>Join Our NewsLetter</h1>
                <div>
                    <input value="Your Email Address"/>
                    <Button type="primary" className='b'>Subscribe</Button>
                    <p>* We will send you weekly updates for the better managment</p>
                </div>
            </div>
          </div>
      </Footer>
    </Layout>
    </Flex>
  )
}

export default App;
