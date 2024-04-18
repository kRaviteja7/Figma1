import React from 'react'
import {Button} from 'antd';
import {StarOutlined,SafetyCertificateOutlined,BulbOutlined,AppleOutlined ,PlaySquareOutlined} from '@ant-design/icons';
import { useState,useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

//medal
const conmedal:React.CSSProperties={
  height: 100,
  marginTop: 50,
  marginLeft: 5,
  marginRight: 5,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 10,
  boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.2)',
  padding: '0 20px 0 20px'
}
const imedal:React.CSSProperties={
  height: 50,
  width: 50,
  borderRadius: 10,
  paddingLeft: 10,
  fontSize: 30,
  backgroundColor: 'rgba(0, 0, 0, 0.071)'
}
const nnmedal:React.CSSProperties={
  color:'blue'
}

//knowmore
const conmore:React.CSSProperties={
  display: 'flex',
  justifyContent: 'space-between',
  height: 250,
  marginTop: 100,
  marginLeft: 170,
  marginRight: 170
}
const knowmore:React.CSSProperties={
  height: 320,
  padding:5,
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  width: '40%',
  marginBottom: 50,
  backgroundColor:'rgba(224, 255, 255, 0.89)'
}
const bbbmore:React.CSSProperties={
  marginLeft: 150,
  width:100,
  backgroundColor: 'blue',
  color: 'white'
}

//meet
const mainmeet:React.CSSProperties={
    textAlign: 'center',
    height: 50,
    marginTop: 150,
    marginLeft: 80,
    marginRight: 80,
    marginBottom:100
}
  
//segment

const segseg:React.CSSProperties={
  margin: 80,
  display: 'flex',
  justifyContent: 'space-between'
}
const iimseg:React.CSSProperties={
  margin: 20
}
const sseg:React.CSSProperties={
  margin: 80,
  paddingLeft: 30,
  textAlign:'start'
}
const starseg:React.CSSProperties={
  width: 100,
  height: 60,
  marginBottom: 10
}

//playstore
const play:React.CSSProperties={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const h:React.CSSProperties={
    color:'blue'
  }
  const bb:React.CSSProperties={
    width: 120,
    height:35,
    color:'white',
    backgroundColor:'blue',
    marginTop: 20,
    borderRadius: 50,
    marginLeft: 15,
    fontSize: 16
  }
  

const Content:React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
      "https://i.pinimg.com/236x/1e/ab/b5/1eabb5f88c8eb8dffc54dc9325ed5841.jpg",
      "https://i.pinimg.com/236x/60/73/d6/6073d69b63181e8162e9f03ac4b906a8.jpg",
      "https://i.pinimg.com/236x/c8/d5/62/c8d562b7c5a4b0b2d6ad17484513e842.jpg",
      "https://i.pinimg.com/236x/95/fb/99/95fb999ba538965e6d264f0671ad6c17.jpg"
    ];
  
    useEffect(() => {
      AOS.init({ duration: 2000 });
      AOS.refresh();
    }, []);

    const nextSlide = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  return (
<>
{/* segment */}
        <div data-aos='zoom-in' style={conmedal}>
            <h1 >Sorem ipsum dolor site medals</h1>
            <StarOutlined style={imedal}/>
            <h3 style={nnmedal}>Village did removenjoyed</h3>
            <SafetyCertificateOutlined style={imedal}/>
            <h3 style={nnmedal}>Nail like length sooner</h3>
            <BulbOutlined style={imedal}/>
            <h3 style={nnmedal}>Expansive windows adapted</h3>
        </div>

{/* knowmore  */}
    <div data-aos='flip-right' style={conmore}>
        <div style={knowmore}>
            <h1>From has captivated audiences worldwide </h1>
            <span style={{padding:10}}>From stands out as a remarkable series that delves into the intricacies of human emotion, morality, and the complexities of relationships.From stands out as a remarkable series that delves into the intricacies of human emotion, morality, and the complexities of relationships.</span>
            <Button style={bbbmore}>Know More</Button>
        </div>
        <div style={knowmore}>
            <h1>From has captivated audiences worldwide </h1>
            <span style={{padding:10}}>From stands out as a remarkable series that delves into the intricacies of human emotion, morality, and the complexities of relationships.From stands out as a remarkable series that delves into the intricacies of human emotion, morality, and the complexities of relationships.</span>
            <Button style={bbbmore}>Know More</Button>
        </div>
    </div>

{/* meet     */}
    <div data-aos='zoom-in' style={mainmeet}>
        <span style={{color:'blue'}}>pH Insider</span>
        <h1>MEET OUR TEAM</h1>
    </div>

{/* segment */}
    <div data-aos='flip-left' style={segseg}>
        <div style={iimseg}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} style={{ width:600, height:600 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <button style={{width:70}} onClick={prevSlide}>&#10094; Prev</button>
                <button style={{width:70}} onClick={nextSlide}>Next &#10095;</button>
            </div>
        </div>
        <div style={sseg}>
            <img style={starseg} src='https://t3.ftcdn.net/jpg/05/31/76/76/360_F_531767656_9ZYTdKAhUXatTUAUp7iYi6coq9dy3nSF.jpg'alt=''/>
            <div style={{marginTop:30}}>
                <span style={{fontWeight:'bold',marginTop:100,textAlign:'center'}}>We'll start by creating atomic components, such as Tags,Description, Title, and so on that will display various information about each movie title. Then, we'll stitch these components together via a compound pattern to create a Banner component that displays each movie title in the form of an image. Finally, we'll use the HeroBanner component to build the image carousel component using the Swiper package.By the end of this post, you'll have the knowledge and skills to create a beautiful and functional image carousel component that will impress your users. Let's get started!</span>
                <h3 style={{marginTop:30}}>Joye Uk</h3>
                <span style={{marginTop:50}}>CEO of GenNextDesign</span>
            </div>
        </div>
    </div>

{/* playstore */}
    <div data-aos='fade-right' style={play}>
        <span style={h}>HOREM IPSUM DOLOR SIT CONSUCTURE ADIPSING ELITE.</span>
        <h1>Torem ipsum dolor sit amet, consecture adipsing elit.</h1>
        <span>Torem ipsum dolor sit amet, consecture adipsing elit.</span>
        <div >
            <button style={bb}><AppleOutlined />PlayStore</button>
            <button style={bb} ><PlaySquareOutlined />GooglePlay</button>
        </div>
    </div>
</>
  )
}

export default Content