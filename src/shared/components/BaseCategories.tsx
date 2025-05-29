import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '../assets/icons/ArrowRightIcon';

interface CategoryItemData {
  href: string;
  title: string;
  imageSrc: string;
  colSpan: number;
}

interface CategoriesGridProps {
  categoriesData: CategoryItemData[];
}

export const BaseCategories = ({ categoriesData }: CategoriesGridProps) => {
  const renderTitleWithBreaks = (title: string) => {
    return title.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < title.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };


  return (
    <div className="flex flex-col rounded-t-2xl text-black-600 bg-white-600 p-4">
      <div className="inline-flex items-center justify-between mb-4">
          <h2 className="text-mobile-h2">Категории</h2>
          <Link href={'/'} className="inline-flex gap-1 items-center text-mobile-text-small bg-background rounded-2xl py-2 px-3">
              <span>Все</span>
              <ArrowRightIcon/>
          </Link>
      </div>
      <div className='grid grid-cols-5 grid-rows-3 gap-3 text-mobile-text-category'>
        {categoriesData.map((category, index) => {
          return (
            <Link
              key={index} 
              href={category.href}
              className={`col-span-${category.colSpan} row-span-1 relative rounded-xl overflow-hidden bg-background flex flex-col justify-between p-4 pb-16`}
            >
              <div className='hidden col-span-2 col-span-3 col-span-5'></div>
              <div className="absolute inset-0">
                <Image
                  src={category.imageSrc}
                  alt={category.title}
                  layout="fill"
                  objectFit="cover" 
                />
              </div>
              <span className="relative z-10">{renderTitleWithBreaks(category.title)}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};