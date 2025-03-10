import React from 'react';
import { StyledContactCard } from './style';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import Paragraph from '../Paragraph';

function ContactCard({ contact, children, ...rest }) {
  return (
    <StyledContactCard {...rest}>
      <Avatar src={contact.avatar} status={'online'}></Avatar>
      <Paragraph size={'large'}>{contact.name}</Paragraph>
      <Paragraph type={'secondary'}>{contact.intro}</Paragraph>
      {children}
    </StyledContactCard>
  );
};

ContactCard.propTypes = {
  children: PropTypes.any
};

export default ContactCard;
