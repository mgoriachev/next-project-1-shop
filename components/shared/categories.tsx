'use client';

import { FC } from 'react';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
  className?: string;
}

const categories = [
  { id: 1, name: 'Пицца' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Завтрак' },
  { id: 4, name: 'Товар 4' },
  { id: 5, name: 'Товар 5' },
  { id: 6, name: 'Товар 6' },
  { id: 7, name: 'Товар 7' },
  { id: 8, name: 'Товар 8' },
];

export const Categories: FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {
        categories.map(({ name, id }, index) => (
          <a 
            className={cn('flex items-center font-bold h-11 rounded-2xl px-5', categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary')} 
            href={`/#${name}`}
            key={name}
          >
            <button>{name}</button>
          </a>
        ))
      }

    </div>
  );
};