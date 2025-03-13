import React, { useState } from 'react';
import { Actions, StyledVideoCall, Minimize, Action, Self, StyledFloatVideo } from './style';
import PropTypes from 'prop-types';
import videoCaller from "@/assets/images/video-caller.jpg";
import {
  faCompressAlt,
  faMicrophone,
  faPhoneSlash,
  faVolumeMute,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from '../Avatar';
import faceIcon from "@/assets/images/face-female-1.jpg";
import Text from '../Text';


function VideoCall({ onHangoff, children, ...rest }) {
  const [fullScreen, setFullScreen] = useState(true);
  if (fullScreen) {
    return (<FullVideo onHangoff={onHangoff} onMini={() => { setFullScreen(false) }}></FullVideo>);
  }
  return (<FloatVideo onFull={() => { setFullScreen(true) }}></FloatVideo>);
};

function FullVideo({ onHangoff, onMini, children, ...rest }) {
  return (
    <StyledVideoCall src={videoCaller} {...rest}>
      <Minimize onClick={onMini}>
        <FontAwesomeIcon icon={faCompressAlt} color={'white'}></FontAwesomeIcon>
      </Minimize>
      <Actions>
        <Action>
          <FontAwesomeIcon icon={faMicrophone} color={'white'}></FontAwesomeIcon>
        </Action>
        <Action type={"hangoff"} onClick={onHangoff}>
          <FontAwesomeIcon icon={faPhoneSlash} color={'white'}></FontAwesomeIcon>
        </Action>
        <Action>
          <FontAwesomeIcon icon={faVolumeMute} color={'white'}></FontAwesomeIcon>
        </Action>
      </Actions>
      <Self>
        <Avatar src={faceIcon} size={'140px'}></Avatar>
      </Self>
      {children}
    </StyledVideoCall>
  )
}

function FloatVideo({ onFull, children, ...rest }) {
  return (
    <StyledFloatVideo>
      <Avatar src={faceIcon}></Avatar>
      <Text size={'medium'}>正在跟 李铭浩 进行视频通话</Text>
      <Text onClick={onFull} type={'secondary'}>点击切换全屏</Text>
      <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
    </StyledFloatVideo>
  )

}

VideoCall.propTypes = {
  children: PropTypes.any
};

export default VideoCall;
