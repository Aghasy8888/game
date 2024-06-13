'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { bottom, bottomNarrowLines, top } from '../../public/count-down';
import BottomStraightLines from '../BottomStraightLines';
import {
  bottomLinesAreNarrowPages,
  bottomLinesAreStraightPages,
} from '../../constants';
import { selectBlur, selectOnboardingBlur, setBlur } from '../../redux/features/generalSlice';
import { useAppSelector } from '../../redux/hooks';

import styles from './TopBottomLines.module.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const TopBottomLines = () => {
  const pathname = usePathname();
  const blur = useAppSelector(selectBlur);
  const onBoardingBlur = useSelector(selectOnboardingBlur);
  const [lineBlur, setLineBlur] = useState('blur(22px)');
  const areBottomLinesStraight = bottomLinesAreStraightPages.some((page) =>
    pathname?.split('/').includes(page)
  );

  const bottomLinesAreNarrow =
    bottomLinesAreNarrowPages.some((page) =>
      pathname?.split('/').includes(page)
    ) || pathname === '/';
    useEffect (() => {
      let onBoardingBlurCount = 0;
      Object.values(onBoardingBlur).forEach(elem => {
        if (elem === true) {
          onBoardingBlurCount++;
        }
      })
      if (onBoardingBlurCount !== 0) {
        setLineBlur('blur(22px)');
      }
      else {
        setLineBlur('none')
      }
    }, [onBoardingBlur])
  return (
    <>
      <Image
        className={styles.top}
        src={top}
        alt="top"
        width={1344}
        height={81}
        priority
        style={{ filter: lineBlur }}
      />
      {areBottomLinesStraight ? (
        <BottomStraightLines />
      ) : bottomLinesAreNarrow ? (
        <Image
          className={styles.bottom}
          src={bottomNarrowLines}
          alt="bottom"
          width={2752}
          height={81}
          priority
        />
      ) : (
        <Image
          className={styles.bottom}
          src={bottom}
          alt="bottom"
          width={2754}
          height={81}
          priority
          style={{ filter: blur ? 'none' : 'blur(22px)' }}
        />
      )}
    </>
  );
};

export default TopBottomLines;
