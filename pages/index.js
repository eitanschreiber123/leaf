import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import dynamic from 'next/dynamic';
const Slide = dynamic(() => import('react-slideshow-image').then((slideshow) => slideshow.Slide),{ ssr: false })
const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  .po, .two {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: row;
  }
  .po {
    justify-content: center;
  }
  .two {
    margin-bottom: 50px;
    justify-content: space-evenly;
  }
  .po p, .two p {
    text-align: center;
  }
  footer {
    width: 100%;
    margin: 0;
    padding: 0;
    height: 200px;
    color: black;
  }
`
const slideImages = [
  `/first.jpg`,
  `/second.jpg`
]
const pr = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  autoplay: true
}
class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Wrapper>
      <h1 style={{position: `absolute`, zIndex: 5}}>Leaf Mold</h1>
      <Slide {...pr}>
        <div style={{height: `90vh`, width: `100vw`}}><div style={{height: `100%`, width: `100vw`, 'backgroundImage': `url(${slideImages[0]})`, baxkgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `cover`, display: `flex`, flexDirection: `row`, alignItems: `center`, justifyContent: `center`}}>
          <div style={{display: `flex`, flexDirection: `column`}}>
            <p>Improved soil from leaf mold</p>
            <div style={{padding: `20px`, color: `black`, border: `2px solid black`, textAlign: `center`}}><p>Buy leaf mold</p></div>
          </div>
        </div>
        </div>
        <div style={{height: `90vh`, width: `100vw`}}><div style={{height: `100%`, width: `100vw`, 'backgroundImage': `url(${slideImages[1]})`, baxkgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `cover`, display: `flex`, flexDirection: `row`, alignItems: `center`, justifyContent: `center`}}>
          <div style={{display: `flex`, flexDirection: `column`}}>
            <p>Turn your leaves into mold</p>
            <div style={{padding: `20px`, color: `black`, border: `2px solid black`, textAlign: `center`}}><p>Learn more</p></div>
          </div>
        </div>
        </div>
      </Slide>
      <div className="po"><p>leaf mold can be used to enhance soil quality which imroves crop yield</p></div>
      <div className="two">
        <p>we sell a kit with instructions to collect leaves and send it back to us and<br/> when we sell it you get a check <br/>Learn more</p>
        <p>we offer different options for buying leaf mold <br/><Link href="/buy"><a>Learn more</a></Link></p>
      </div>
      <footer></footer>
      </Wrapper>
    )
  }
}
export default IndexPage
