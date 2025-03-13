import React from 'react';
import { File, Files, StyledFileList } from './style';
import PropTypes from 'prop-types';
import FilterList from '../FilterList';
import filesData from "@/data/files.js";
import { ReactComponent as zipIcon } from '@/assets/icons/fileZip.svg';
import { ReactComponent as excelIcon } from '@/assets/icons/fileExcel.svg';
import { ReactComponent as imageIcon } from '@/assets/icons/fileImage.svg';
import { ReactComponent as pdfIcon } from '@/assets/icons/filePdf.svg';
import { ReactComponent as pptIcon } from '@/assets/icons/filePpt.svg';
import { ReactComponent as worldIcon } from '@/assets/icons/fileWord.svg';
import { ReactComponent as optionsIcon } from '@/assets/icons/options.svg';
import Icon from '../Icon';
import Text from '../Text';
import useStaggeredList from '@/hooks/useStaggeredList';
import { animated } from 'react-spring';

const fileImgMap = {
  "zip": zipIcon,
  "excel": excelIcon,
  "image": imageIcon,
  "pdf": pdfIcon,
  "ppt": pptIcon,
  "word": worldIcon,
}

function FileList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(filesData.length);
  return (
    <StyledFileList {...rest}>
      <FilterList
        filterLabel={'列表排序'}
        options={['最新文件优先', '按文件名排序']}
      ></FilterList>
      <Files>
        {filesData.map((item, index) => {
          return (
            <animated.div style={trailAnimes[index]}>
              <File id={item.id}>
                <Icon icon={fileImgMap[item.type]} width={60} height={60}></Icon>
                <Text size={'medium'} bold>{item.name}</Text>
                <Text type={'secondary'}>{item.size}</Text>
                <Icon icon={optionsIcon} width={24} height={24} color={'rgba(41, 47, 76,0.3)'}></Icon>
                <Text type={'secondary'}>{item.updatedAt}</Text>
              </File>
            </animated.div>
          )
        })}
      </Files>
      {children}
    </StyledFileList>
  );
};

FileList.propTypes = {
  children: PropTypes.any
};

export default FileList;
