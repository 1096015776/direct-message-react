import React from 'react';
import { Album, AlbumSection, AlbumTitle, CloseIcon, ContactSection, Photo, SocialLinks, StyledProfile } from './style';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import face from "@/assets/images/face-male-1.jpg";
import Paragraph from '../Paragraph';
import Emoji from '../Emoji';
import { ReactComponent as closeIcon } from "@/assets/icons/cross.svg"
import {
  faWeibo,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import SocialIcon from '../Icon/SocialIcon';
import { useTheme } from 'styled-components';
import Seperator from '../Seperator';
import Text from '../Text';
import photo1 from "@/assets/images/photo1.jpg";
import photo2 from "@/assets/images/photo2.jpg";
import photo3 from "@/assets/images/photo3.jpg";


function Profile({ children, ...rest }) {
  const theme = useTheme();
  return (
    <StyledProfile {...rest}>
      <CloseIcon icon={closeIcon} width={24} height={24} ></CloseIcon>
      <Avatar
        style={{
          margin: "26px 0",
          gridArea: "1 / 1 / 3 / 2",
        }}
        src={face}
        size='160px'
        statusIconSize='25px'></Avatar>
      <Paragraph
        size="xlarge"
        style={{
          marginBottom: '12px'
        }}
      >
        慕容天宇
      </Paragraph>
      <Paragraph
        size="medium"
        type="secondary"
        style={{
          marginBottom: '18px'
        }}
      >
        北京市 朝阳区
      </Paragraph>
      <Paragraph
        style={{
          marginBottom: '26px'
        }}
      >
        帮助客户构建网站，并协助在社交网站上进行推广{" "}
        <Emoji label="fire">🔥</Emoji>
      </Paragraph>
      <SocialLinks>
        <SocialIcon
          icon={faWeibo}
          bgColor={"#F06767"}
          href={"https://weibo.com"}></SocialIcon>
        <SocialIcon
          icon={faGithub}
          bgColor={'black'}
        ></SocialIcon>
        <SocialIcon
          icon={faLinkedin}
          bgColor={"#2483C0"}
        ></SocialIcon>
      </SocialLinks>
      <Seperator style={{ margin: "30px 0" }}></Seperator>
      <ContactSection>
        <Description label="联系电话">+86 18688888888</Description>
        <Description label="电子邮件">admin@fh.com</Description>
        <Description label="个人网站">https://zxuqian.cn</Description>
      </ContactSection>
      <Seperator style={{ margin: "30px 0" }}></Seperator>
      <AlbumSection>
        <AlbumTitle>
          <Text type="secondary">相册（30）</Text>
          <a>查看全部</a>
        </AlbumTitle>
        <Album>
          <Photo src={photo1} alt="" />
          <Photo src={photo2} alt="" />
          <Photo src={photo3} alt="" />
        </Album>

      </AlbumSection>

      {children}
    </StyledProfile>
  );
};

Profile.propTypes = {
  children: PropTypes.any
};

function Description({ label, children }) {
  return (
    <Paragraph>
      <Text type="secondary">{label}：</Text>
      <Text>{children}</Text>
    </Paragraph>
  );
}

export default Profile;
