'use client';

import { useState } from 'react';
import cn from 'classnames';
import { AnimatePresence, motion } from 'motion/react';

import { Button } from '@/shared/ui/Button';

import s from './Tabs.module.scss';

export interface ITab<T = string> {
  label: string;
  value: T;
  content: React.ReactNode;
}

interface IProps<T = string> {
  tabs: Array<ITab<T>>;
  defaultValue?: T;
  className?: string;
}

export const Tabs = <T = string,>({
  tabs,
  defaultValue,
  className
}: IProps<T>) => {
  const [activeValue, setActiveValue] = useState<T>(
    defaultValue ?? tabs[0]?.value
  );

  const activeTab = tabs.find(tab => tab.value === activeValue);

  return (
    <div className={s.wrapper}>
      <div className={cn(s.tabs, className)}>
        {tabs.map(tab => (
          <Button
            key={String(tab.value)}
            type="button"
            variant="underline"
            className={cn(s.tab, { [s.tabActive]: activeValue === tab.value })}
            onClick={() => setActiveValue(tab.value)}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={String(activeValue)}
          className={s.content}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {activeTab?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
