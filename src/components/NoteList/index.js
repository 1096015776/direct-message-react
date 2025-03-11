import React from 'react';
import { Note, Notes, StyledNoteList } from './style';
import PropTypes from 'prop-types';
import FilterList from '../FilterList';
import notesData from '@/data/notes.js';
import Text from '../Text';

function NoteList({ children, ...rest }) {
  return (
    <StyledNoteList {...rest}>
      <FilterList options={['最新笔记优先', '有改动的优先']}
        actionLabel={'有改动的优先'}
      ></FilterList>
      <Notes>
        {notesData.map((item) => (
          <Note>
            <img src={item.image} alt="img"></img>
            <Text size={'medium'} bold>{item.title}</Text>
            <Text size={'small'}>{item.excerpt}</Text>
            <Text type={'secondary'}>{item.publishedAt}</Text>
          </Note>
        ))}
      </Notes>

      {children}
    </StyledNoteList>
  );
};

NoteList.propTypes = {
  children: PropTypes.any
};

export default NoteList;
