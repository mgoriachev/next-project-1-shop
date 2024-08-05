'use client'

import { FC } from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';

interface Props {
  title: string;
  items: FilterChecboxProps[];
  defaultItems?: FilterChecboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: FC<Props> = ({ 
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  onChange,
  defaultValue,
  className,
 }) => {
  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>

      <div className='mb-5'>
        <Input placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" />
      </div>

      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {items.map((item, index) => (
          <FilterCheckbox 
            onCheckedChange={(ids) => console.log(ids)}
            checked={false}
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>
    </div>
  )
}