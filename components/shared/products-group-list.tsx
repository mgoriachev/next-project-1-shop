'use client'

import { FC, useEffect, useRef } from 'react';
import { useIntersection, } from 'react-use';
import { Title } from './title';
import { ProductCard } from './product-card';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: FC<Props> = ({ title, items, className, listClassName, categoryId }) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, title, categoryId])

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            id={product.id}          
          />
        ))}
      </div>
    </div>
  );
};