import Image from 'next/image';
import { slashesFromBottom, slashesFromTop } from '../../public/count-down';

import styles from './Slashes.module.scss';

const Slashes = () => {
  return (
    <>
      <div className={styles.slashesTop}>
        <Image
          className={styles.img}
          src={slashesFromBottom}
          alt="slashesFromBottom"
          width={134}
          height={26}
          priority
        />
        <Image
          className={styles.img}
          src={slashesFromTop}
          alt="slashesFromTop"
          width={134}
          height={26}
          priority
        />
      </div>

      <div className={styles.slashesBottom}>
        <Image
          className={styles.img}
          src={slashesFromTop}
          alt="slashesFromTop"
          width={134}
          height={26}
          priority
        />
        <Image
          className={styles.img}
          src={slashesFromBottom}
          alt="slashesFromBottom"
          width={134}
          height={26}
          priority
        />
      </div>
    </>
  );
};

export default Slashes;