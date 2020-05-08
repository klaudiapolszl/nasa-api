import React from 'react';
import { PagePolaroid, PolaroidVideo, PolaroidImg, PolaroidTextContainer } from './styled/PagePolaroid.js'

const Polaroid = props => {
  return (
    <PagePolaroid>
      { (props.media_type === "video") ? <PolaroidVideo src={ props.video } title={ props.title }></PolaroidVideo> : <PolaroidImg src={ props.img } alt={ props.title }></PolaroidImg> }
      <PolaroidTextContainer>
        <p>
          { props.explanation }
        </p>
      </PolaroidTextContainer>
    </PagePolaroid>
  )
}

export default Polaroid;
