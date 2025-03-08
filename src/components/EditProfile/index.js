import React, { useState } from 'react';
import { GenderAndRegion, SelectGroup, StyledEditProfile, StyledIconInput } from './style';
import PropTypes from 'prop-types';
import Profile from '../Profile';
import Avatar from '../Avatar';
import faceIcon from '@/assets/images/face-female-1.jpg';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Text from '../Text';
import InputText from '../Input/InputText';
import Radio from '../Radio';
import Select from '../Select';
import Option from '../Option';
import { InputUnderline } from '../Input/InputText/style';
import SocialIcon from '../Icon/SocialIcon';
import {
  faWeibo,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";



function EditProfile({ children, ...rest }) {
  const [showEdit, setShowEdit] = useState(false)
  if (!showEdit) {
    return (<Profile showCloseIcon={false} showEditBtn={true} onEdit={() => { setShowEdit(true) }}></Profile>)
  }

  return (
    <StyledEditProfile {...rest}>
      <Avatar src={faceIcon} size="160px"></Avatar>
      <Button size={'52px'} onClick={() => setShowEdit(false)}>
        <FontAwesomeIcon icon={faCheck} style={{ fontSize: "12px" }}></FontAwesomeIcon>
      </Button>
      <Text size={'large'}>基本信息</Text>
      <InputText label={'昵称'}></InputText>
      <GenderAndRegion>
        <Radio.Group label={'性别'}>
          <Radio name="gender">男</Radio>
          <Radio name="gender">女</Radio>
        </Radio.Group>
        <label>
          <Text style={{ marginBottom: '8px' }}>地区:</Text>
          <SelectGroup>
            <Select type="form">
              <Option>省份</Option>
            </Select>
            <Select type="form">
              <Option>城市</Option>
            </Select>
            <Select type="form">
              <Option>区县</Option>
            </Select>
          </SelectGroup>
        </label>
      </GenderAndRegion>
      <InputText label={'个性签名'}></InputText>
      <Text size={'large'}>联系信息</Text>
      <InputText label={'联系电话'}></InputText>
      <InputText label={'电子邮箱'}></InputText>
      <InputText label={'个人网站'}></InputText>
      <Text size={'large'}>社交信息</Text>
      <IconInput bgColor={"#F06767"} icon={faWeibo}></IconInput>
      <IconInput bgColor={"black"} icon={faGithub}></IconInput>
      <IconInput bgColor={"#2483C0"} icon={faLinkedin}></IconInput>
      {children}
    </StyledEditProfile>
  );
};

function IconInput({ icon, bgColor, ...rest }) {
  return (<StyledIconInput {...rest}>
    <SocialIcon icon={icon} bgColor={bgColor}></SocialIcon>
    <InputUnderline placeholder={'请输入内容'}></InputUnderline>
  </StyledIconInput>)

}

EditProfile.propTypes = {
  children: PropTypes.any
};

export default EditProfile;
