import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

const Player = () => {
  const navigate = useNavigate()
  return (
    <PlayContainer>
        <div className='player'>
          <div className='backArrow'>
            <BsArrowLeft onClick={()=>navigate(-1)}/>
          </div>
          <video src='https://imdb-video.media-imdb.com/vi2163260441/1434659607842-pgv4ql-1556354704370.mp4?Expires=1689784636&Signature=Q1WBQaZiYGiYLxmB35wXtAerar-MiKDABB77csvaUNsTVDWDsnQr~KWTtRW7uAOxdE~FhBhnfnFAUiWJCER73PM5w9dd9p8J429Gyvyj~OLMq3yVkeLwqiUqzyNJUphkqQZzeXVJ1QTZ6cXoQ6ft69MTeQ2SzyIlpzFphFZElGLYU04Mu8ajilkRiTnSy2frN7qhGOFU7jGLPYX5wBc2SI-S03LOJoj-1z7xO9nxD2OVqLHtWns71qPHoxTzVIggAUlbBnwGNkLPteWumEYlTgjLWI-2r0s1XXk8isXYcBGVVcsmC0c2g8dpDNfYlSAspAIr2U1nO73CJJQB3OuARQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA'
          autoPlay loop controls 
          />
        </div>
    </PlayContainer>
  )
}

const PlayContainer = styled.div`
    .player{
      width: 100vw;
      height: 100vh;
      .backArrow{
         position: absolute;
         padding: 2rem;
         z-index: 1;
         svg{
          font-size: 3rem;
          cursor: pointer;
          color: white;
         }
      }
     video{
      height: 100%;
      width: 100%;
     }
    }
`

export default Player