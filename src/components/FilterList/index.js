import React from 'react';
import { StyledFilterList } from './style';
import PropTypes from 'prop-types';
import Input from '../Input';
import Filter from '../Filter';
import Select from '../Select';
import Option from '@/components/Option/index.js';
import Button from '../Button';
import Icon from '../Icon';
import { ReactComponent as Plus } from '@/assets/icons/plus.svg'

function FilterList({
  options,
  filterLabel = "列表排序",
  actionLabel,
  children,
  ...rest }) {
  return (
    <StyledFilterList {...rest}>
      <Input.Search></Input.Search>
      <Filter style={{ padding: "20px 0" }}>
        {options && (
          <Filter.Filters label={filterLabel}>
            <Select>
              {options.map((option, index) => (
                <Option key={index}>{option}</Option>
              ))}
            </Select>
          </Filter.Filters>
        )}

        {actionLabel && (
          <Filter.Action label={actionLabel}>
            <Button>
              <Icon icon={Plus} width={12} height={12} />
            </Button>
          </Filter.Action>
        )}


      </Filter>
      {children}
    </StyledFilterList>
  );
};

FilterList.propTypes = {
  children: PropTypes.any
};

export default FilterList;
