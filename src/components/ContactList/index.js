import React from 'react';
import { StyledContact, StyledContactList } from './style';
import PropTypes from 'prop-types';
import FilterList from '../FilterList';
import contactData from "@/data/contact.js"
import ContactCard from '../ContactCard';

import useStaggeredList from '@/hooks/useStaggeredList';
import { animated } from 'react-spring';

function ContactList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(contactData.length);
  return (
    <StyledContactList {...rest}>
      <FilterList
        filterLabel={'列表排序'}
        options={['新添加优先', '按姓名排序']}
        actionLabel={'添加好友'}
      ></FilterList>
      <StyledContact>
        {contactData.map((item, index) => {
          return (
            <animated.div style={trailAnimes[index]}>
              <ContactCard
                id={item.id}
                contact={item}></ContactCard>
            </animated.div>
          )
        })}
      </StyledContact>
      {children}
    </StyledContactList>
  );
};

ContactList.propTypes = {
  children: PropTypes.any
};

export default ContactList;
