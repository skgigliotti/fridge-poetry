import Photo from './Photo'
import Word from './Word'
import { Carousel, Flex } from "antd"

const images = 
  [
    {'img_path': './assets/images/bridge.jpg', 'alt_text': 'Golden Gate Bridge at Golden Hour with Birds', 'vertical': true},
    {'img_path': './assets/images/don_wizard.jpg', 'alt_text': ''},
    {'img_path':'./assets/images/hierve_el_agua.jpg', 'alt_text': ''},
    {'img_path': './assets/images/akihabara.jpg', 'alt_text': ''},
    {'img_path': './assets/images/ferry_building.jpg', 'alt_text': '', 'vertical': true},
    {'img_path': './assets/images/bonita_tunnel.jpg', 'alt_text': '', 'vertical': true},
    {'img_path': './assets/images/macro_bee.jpg', 'alt_text': '', 'vertical': true},
    {'img_path': './assets/images/transamerica.jpg', 'alt_text': '', 'vertical': true},
  ]

const poems = [
  [['hello', 'world'], ['I', 'am', 'a', 'computer', 'scientist'], ['passionate', 'about', 'creating', 'technology', 'for', 'social', 'good']],
  [['it'], ['is'], ['ok']],
  [['it'], ['is'], ['ok']],
  [['it'], ['is'], ['ok']],
  [['it'], ['is'], ['ok']],
  [['it'], ['is'], ['ok']],
  [['it'], ['is'], ['ok']],
  [['it'], ['is'], ['ok']],
]

function ContentCarousel(){
    return (
        <Carousel autoplay autoplaySpeed={5000}>
            {
            poems.map(function(poem, i){
                return(
                <div>
                    <Flex wrap vertical={false} justify="space-evenly" style={{ padding: '2em' }}>
                    <Flex wrap style={{maxWidth: "50%", minWidth: "600px"}}>
                        {
                            poem.map(function(line, j) {
                                return (
                                    <Flex wrap style={{ minWidth: "100%", justifyContent: "flex-end" }} vertical={false} key={`${i}${j}`}>
                                        {line.map(function(word, k){
                                            return <Word word={word} key={`${i}${j}${k}`}/>;}
                                )} </Flex>)
                            })
                        }
                    </Flex>
                    <div style={{ maxWidth: "50%" }}>
                    <Photo img_path={images[i].img_path} alt_text={images[i].alt_text} vertical={images[i].vertical}/>
                   </div>
                </Flex>
                </div>
            )})
        }
        </Carousel>
    )}
export default ContentCarousel
