import Image from 'next/image';
import {
  arrowDown,
  arrowDownGray,
  arrowUp,
  arrowUpGray,
} from '../../public/summary';

import styles from './Arrow.module.scss';

const Arrow = ({ open, name = '' }: { open: boolean; name?: string }) => {
  const isArrowGray = name === 'inAttackWithDataCard';

  return (
    <>
      {open ? (
        <Image
          className={`${styles.arrow} ${styles[name]} ${styles.isOpen}`}
          src={isArrowGray ? arrowUpGray : arrowUp}
          alt="arrowUp"
          width={11}
          height={11}
          priority
        />
      ) : (
        <Image
          className={`${styles.arrow} ${styles[name]}`}
          src={isArrowGray ? arrowDownGray : arrowDown}
          alt="arrowDown"
          width={11}
          height={11}
          priority
        />
      )}
    </>
  );
};

export default Arrow;
