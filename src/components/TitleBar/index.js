import React from 'react';
import { Actions, StyledTitleBar, Title } from './style';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import faceIcon from "@/assets/images/face-female-1.jpg"
import Paragraph from '../Paragraph';
import Text from "../Text/";
import { ReactComponent as callIcon } from "@/assets/icons/call.svg"
import { ReactComponent as cameraIcon } from "@/assets/icons/camera.svg"
import { ReactComponent as optionsIcon } from "@/assets/icons/options.svg"
import Icon from '../Icon';

function TitleBar({ children, ...rest }) {
  return (
    <StyledTitleBar {...rest}>
      <Avatar src={faceIcon} status={"offline"}></Avatar>
      <Title>
        <Paragraph size="large">
          慕容天宇
        </Paragraph>
        <Paragraph type="secondary">
          <Text>离线</Text>
          <Text>· 最后阅读: 3小时前</Text>
        </Paragraph>
      </Title>
      <Actions>
        <Icon width={24} height={24} opacity={0.3} icon={callIcon}></Icon>
        <Icon width={24} height={24} opacity={0.3} icon={cameraIcon}></Icon>
        <Icon width={24} height={24} opacity={0.3} icon={optionsIcon}></Icon>
      </Actions>
      {children}
    </StyledTitleBar>
  );
};

TitleBar.propTypes = {
  children: PropTypes.any
};

export default TitleBar;
