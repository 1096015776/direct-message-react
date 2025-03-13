import React from 'react';
import { LabelGroup, StyledDescription, StyledSetting, StyledSettingItem } from './style';
import PropTypes from 'prop-types';
import Switch from '../Switch';
import Text from '../Text';
import { ReactComponent as rightIcon } from '@/assets/icons/arrowMenuRight.svg'
import Icon from '../Icon';
import Paragraph from '../Paragraph';
import { Link } from 'react-router-dom';

function Setting({ children, ...rest }) {
  return (
    <StyledSetting {...rest}>
      <Paragraph size={"xxlarge"}>隐私设置</Paragraph>
      <SettingItem label={'添加好友时需要验证'} ></SettingItem>
      <SettingItem label={'推荐通讯录好友'} description={'上传的通讯录只用来匹配好友列表，本应用不会记录和发送任何信息给其它机构或'}></SettingItem>
      <SettingItem label={'只能通过手机号找到我'} ></SettingItem>
      <Paragraph size={"xxlarge"}>隐私设置</Paragraph>
      <SettingItem label={'只能通过手机号找到我'} ></SettingItem>
      <SettingItem label={'新消息通知'} ></SettingItem>
      <SettingItem label={'语音和视频通话提醒'} ></SettingItem>
      <SettingItem label={'显示通知详情'} ></SettingItem>
      <SettingItem label={'声音'} ></SettingItem>
      <Link to="/settings/blocked" style={{
        textDecoration: "none", color: "inherit"
      }}>
        <SettingItem label={'查看已静音的好友列表'} type={'menu'} ></SettingItem>
      </Link>
      {children}
    </StyledSetting>
  );
};

function SettingItem({ type = 'switch', label, description, ...rest }) {
  return (
    <StyledSettingItem {...rest}>
      <LabelGroup>
        <Text size={'large'}>{label}</Text>
        {type === 'switch' && <Switch></Switch>}
        {type === 'menu' && <Icon width={24} height={24} icon={rightIcon}></Icon>}
      </LabelGroup>
      {description && <StyledDescription>{description}</StyledDescription>}
    </StyledSettingItem>
  )

}

Setting.propTypes = {
  children: PropTypes.any
};

export default Setting;
