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
import { DropDownItem } from '../DropDown/style';
import DropDown from '../DropDown';
import Seperator from '../Seperator';

function TitleBar({ onVideoClicked, onAvatarClick, children, ...rest }) {
  return (
    <StyledTitleBar {...rest}>
      <Avatar onClick={onAvatarClick} src={faceIcon} status={"offline"} style={{ cursor: "pointer" }}></Avatar>
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
        <Icon width={24} height={24} opacity={0.3} icon={callIcon} onClick={onVideoClicked}></Icon>
        <Icon width={24} height={24} opacity={0.3} icon={cameraIcon}></Icon>
        <DropDown conent={
          <>
            <DropDownItem><Paragraph>个人资料</Paragraph></DropDownItem>
            <DropDownItem><Paragraph>关闭会话</Paragraph></DropDownItem>
            <Seperator></Seperator>
            <DropDownItem><Paragraph type='danger'>屏蔽此人</Paragraph></DropDownItem>
          </>
        }>
          <Icon width={24} height={24} opacity={0.3} icon={optionsIcon}></Icon>
        </DropDown>
      </Actions>
      {children}
    </StyledTitleBar>
  );
};

TitleBar.propTypes = {
  children: PropTypes.any
};

export default TitleBar;
