import React from 'react';
import { IconContainer, StyledFooter, StyledPopoverContent } from './style';
import PropTypes from 'prop-types';
import Input from '../Input';
import { ReactComponent as planeIcon } from "@/assets/icons/plane.svg";
import { ReactComponent as smileIcon } from "@/assets/icons/smile.svg";
import { ReactComponent as microPhoneIcon } from "@/assets/icons/microphone.svg"
import { ReactComponent as clipIcon } from "@/assets/icons/clip.svg";
import { ReactComponent as optionsIcon } from "@/assets/icons/options.svg";
import Icon from '../Icon';
import { useTheme } from 'styled-components'
import Button from '../Button';
import Popover from '../Popover';
import Emoji from '../Emoji';

function Footer({ children, ...rest }) {
  const theme = useTheme();
  return (
    <StyledFooter {...rest}>
      <Input prefix={<Icon icon={clipIcon} width={24} height={24}></Icon>} suffix={(
        <IconContainer>
          <Popover content={<PopoverContent></PopoverContent>}>
            <Icon icon={smileIcon} width={24} height={24} color={theme.gray3}></Icon>
          </Popover>
          <Icon icon={microPhoneIcon} width={24} height={24}></Icon>
          <Button size={"52px"}>
            <Icon icon={planeIcon} color={'white'} width={24} height={24}></Icon>
          </Button>
        </IconContainer>

      )}></Input>
      {children}
    </StyledFooter>
  );
};

function PopoverContent(props) {
  return (
    <StyledPopoverContent>
      <Emoji label="smile">😊</Emoji>
      <Emoji label="grinning">😆</Emoji>
      <Emoji label="thumbup">👍</Emoji>
      <Emoji label="indexfingerup">☝️</Emoji>
      <Emoji label="ok">👌</Emoji>
      <Emoji label="handsputtogether">🙏</Emoji>
      <Emoji label="smilewithsunglasses">😎</Emoji>
      <Emoji label="flexedbicep">💪</Emoji>
      <Icon icon={optionsIcon} width={24} height={24} style={{ marginLeft: "24px" }} />
    </StyledPopoverContent>
  );
}

Footer.propTypes = {
  children: PropTypes.any
};

export default Footer;
