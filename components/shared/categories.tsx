import { FC } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

const categories = ['Товар 1', 'Товар 2', 'Товар 3', 'Товар 4', 'Товар 5', 'Товар 6', 'Товар 7', 'Товар 8'];
const activeIndex = 0;

export const Categories: FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {
        categories.map((category, index) => (
          <a className={cn('flex items-center font-bold h-11 rounded-2xl px-5', activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary')} key={category}>
            <button>{category}</button>
          </a>
        ))
      }

    </div>
  )
}