import React from 'react'
import { Button } from 'antd'
import {StarOutlined,CrownFilled ,FireFilled,ArrowRightOutlined} from '@ant-design/icons';
import Content from './yc55'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const gg:React.CSSProperties={
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 80,
}
const d:React.CSSProperties={
  width: 550,
  marginTop: 70,
  textAlign:'start'
}
const wr:React.CSSProperties={
  position: 'relative',
  marginTop: 40
}
const jk:React.CSSProperties={
  right: 70,
  top: 40,
  height:40,
  borderRadius:10,
  backgroundColor: 'blue',
  color: 'white',
  position: 'absolute',
  cursor: 'pointer',
  width: 120
}
const inr:React.CSSProperties={
  paddingRight: 40,
  fontSize: 20,
  marginTop: 30,
  height: 60,
  width: '90%',
  boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.422)',
  borderRadius:10,
}
const ch:React.CSSProperties={
  marginTop:20,
  display: 'flex',
  justifyContent: 'flex-start'
}
const img:React.CSSProperties={
  width: 800,
  height: 500,
  borderRadius: 5,
}
// collage
const mgcollage:React.CSSProperties={
  marginTop:80,
  display: 'flex'
}
const mgmcollage:React.CSSProperties={
  display: 'flex',
  justifyContent: 'space-between',
}
const mimcollage:React.CSSProperties={
  height: 100,
  margin:'10px 10px 10px 5px',
  width: 100,
  boxShadow: '3px 3px 3px 0 rgba(0, 0, 0, 0.5)',
  borderRadius: 10
}

//backgoundimage
const imimg:React.CSSProperties={
  width: 700,
  height: 350,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 60,
  marginTop: 80,
  marginLeft: 30,
  marginRight: 80,
  borderRadius: 10,
  boxShadow: '0 5px 5px 5px rgba(0, 0, 0, 0.2)',
  backgroundImage: 'url(https://t3.ftcdn.net/jpg/06/03/58/90/360_F_603589030_Xkjmk7GNPJ81aGxKVg4mZRRI0NCirvIu.jpg)',
  color: 'white',
}
const gimg:React.CSSProperties={
  marginLeft: 300
}
const mimg:React.CSSProperties={
  marginTop: 30,
  backgroundColor: 'gold',
  marginLeft: 300,
  width:100
}

//text
const tttext:React.CSSProperties={
  textAlign: 'center',
  height: 100,
  margin:'80px 80px 80px 80px'
}
const tftext:React.CSSProperties={
  fontSize:30,
  marginLeft: 360,
  width: 500
}
const fttext:React.CSSProperties={
  color:'blue'
}

//Demo
const demdemo:React.CSSProperties={
  display: 'flex',
  justifyContent: 'space-between',
  margin:10
}
const redemo:React.CSSProperties={
  display: 'flex',
  flexDirection: 'column',
  textAlign:'start',
  width: 420,
  height: 250,
  marginTop: 20,
  paddingLeft: 50,
  borderRadius: 10,
  boxShadow: '0 5px 5px 5px rgba(0, 0, 0, 0.2)'
}
const icdemo:React.CSSProperties={
  marginTop: 10,
  color: 'blue',
  fontSize: 40
}
const rrdemo:React.CSSProperties={
  color: 'gold',
  marginTop: 10,
}
const ldemo:React.CSSProperties={
  marginTop:20,
  marginLeft:600,
    width: 150,
    height: 40,
    color: 'white',
    backgroundColor: 'blue'
}

//register
const conrig:React.CSSProperties={
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'black',
  color: 'white',
  height: 220,
  marginTop: 100,
  paddingLeft: 5,
  paddingRight: 80,
  borderRadius: 10
}
const whyrig:React.CSSProperties={
  margin: '40px 0 30px 0',
  textAlign:'start'
}
const formrig:React.CSSProperties={
  margin: '40px 0 60px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}
const inputrig:React.CSSProperties={
  backgroundColor:'rgba(255, 255, 255, 0.201)',
  height: 30
}
const butrig:React.CSSProperties={
  backgroundColor: 'blue',
  color: 'white',
  borderRadius: 10,
  height: 40
}


const Contents:React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  return (
<div className='main'>
{/* gmail */}
      <div data-aos='fade-right' style={gg}>
          <div style={d}>
              <span style={{color:'blue'}}>Nibh tellus molestic nan mass enima, megna actisc skjd</span>
              <h1 ><span style={{color:'blue'}}>Nibh tellus molestic</span> nan mass enima, megna actisc skjd sdfj sjojoioi kjkn</h1>
              <span style={{marginTop:50}}>Nibh tellus molestic nan mass enima, megna actisc skjd sdfj sjojoioi kjkn lkll fee oijjjo sdkjnknsd snksjd kjndkjs sfnjksn sfjsio efo jnj iedjoif fji nfiwej nejnf</span>
              <div style={wr}>
                  <input style={inr} type='text' placeholder='Register using gmail addres' className='inr'/>
                  <button style={jk}>Requist a demo</button>
              </div>
              <div style={ch}>
                  <input type='checkbox' id='register' style={{borderRadius:5,height:15}}/>
                  <label htmlFor='register' > Free Register</label><br/>
                  <input type='checkbox' id='grateService' style={{borderRadius:5,height:15}}/>
                  <label htmlFor='grateService'>Great Service</label>
              </div>
          </div>
          <div>
              <img style={img} src="https://cdn.dribbble.com/users/12095349/screenshots/19388442/media/e5d5390a7c40f09ec9552414363127a3.png?resize=1000x750&vertical=center" alt="" />
          </div>
      </div>

{/* collage */}
      <div data-aos='zoom-in' style={mgcollage}>
        <div style={mgmcollage}>
            <img style={mimcollage}  src='https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161553/Brown-Unversity-Logo.png' alt=''/>
            <img style={mimcollage}  src='https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161547/Boston-University-Logo.png' alt=''/>
            <img style={mimcollage}  src='https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161532/Chicago-University-Logo.png' alt=''/>
            <img style={mimcollage}  src='https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161516/Duke-University-Logo.png' alt=''/>
            <img style={mimcollage}  src='https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161501/Melbourne-University-Logo.png' alt=''/>
            <img style={mimcollage}  src='https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161415/Pittsburgh-University-Logo.png' alt=''/>
            <img style={mimcollage}  src='https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161407/Pretoria-University-Logo.png' alt=''/>
        </div>
        <div style={{paddingLeft:100,paddingTop:15,fontWeight:'bold',fontSize:25}}>
            <span>Over<span style={{color:'blue'}}>16+ Universities</span>  & 12000 Enroled and Growing</span>
        </div>
      </div>

{/* image */}
      <div data-aos='flip-right' style={gimg}>
        <div style={imimg}>
            <h1>Forem ipsum dolor site atem,constuctor adipsing elite</h1>
            <span style={{marginTop:20}}>Forem ipsum dolor site atem,constuctor adipsing elite</span>
            <Button style={mimg}>Try for free</Button>
        </div>
      </div>

{/* text */}
    <div data-aos='zoom-in' style={tttext}>
        <h1 style={tftext}>Forem ipsum dolor site atem,constuctor adipsing elite</h1>
        <span style={fttext}>Lorem ipsum dolor site atem,constuctor adipsing elite orem ipsum dolor site atem,constuctor adipsing elite orem ipsum dolor site atem,constuctor adipsing elite</span>
    </div>

{/* Demo */}
    <div data-aos='flip-left'>
        <div style={demdemo}>
            <div style={redemo}>
                <CrownFilled style={icdemo}/>
                <h1>yorem impus dolor site</h1>
                <span>From stands out as a remarkable series that delves into the intricacies of human emotion.</span>
                <span style={rrdemo}>Read More<ArrowRightOutlined /></span>
            </div>
            <div style={redemo}>
                <FireFilled  style={icdemo}/>
                <h1>yorem impus dolor site</h1>
                <span>From stands out as a remarkable series that delves into the intricacies of human emotion.</span>
                <span style={rrdemo}>Read More<ArrowRightOutlined style={{marginLeft:10}} /></span>
            </div>
            <div style={redemo}>
                <StarOutlined style={icdemo}/>
                <h1>yorem impus dolor site</h1>
                <span>From stands out as a remarkable series that delves into the intricacies of human emotion.</span>
                <span style={rrdemo}>Read More<ArrowRightOutlined /></span>
            </div>
        </div>
        <Button style={ldemo}>Requiest a demo</Button>
    </div>

    <Content/>

{/* Register */}
    <div data-aos='zoom-in' style={conrig}>
        <div style={whyrig}>
            <span>WHY CHOOSE US</span>
            <h1>Horem ipsum doler sit aptem, constructer adipiscing elit</h1>
            <span>WHY CHOOSE US</span>
        </div>
        <div style={formrig}>
            <input style={inputrig} type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <button style={butrig}>Submit</button>
        </div>
    </div>
</div>
  )
}

export default Contents