import React from 'react';
import { StyledVoiceMessage } from './style';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Button from '../Button';
import { ReactComponent as playIcon } from "@/assets/icons/play.svg"
import { ReactComponent as waveIcon } from "@/assets/icons/wave.svg"
import Text from '../Text';

function VoiceMessage({ time, type, children, ...rest }) {
  return (
    <StyledVoiceMessage type={type} {...rest}>
      <Button size={"40px"}>
        <Icon icon={playIcon} width={14} height={16}></Icon>
      </Button>
      <Icon icon={waveIcon} width={"100%"} height={"100%"}></Icon>
      <Text bold>{time}</Text>
      {children}
    </StyledVoiceMessage>
  );
};

VoiceMessage.propTypes = {
  children: PropTypes.any
};

export default VoiceMessage;
