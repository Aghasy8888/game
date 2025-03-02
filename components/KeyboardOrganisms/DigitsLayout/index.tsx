import Image from 'next/image';
import { backspace, enterKey, keyboardIcon } from '../../../public/keyboard';
import { BACKSPACE_NAME } from '../../../constants';
import KeyboardNumbers from '../../../common/KeyboardNumbers';

import styles from '../Layout/Layout.module.scss';

const DigitsLayout = ({
  setIsDigitLayout,
  handleButtonClick,
  setShowKeyboard,
}: {
  setShowKeyboard: TSetBoolean;
  setIsDigitLayout: TSetBoolean;
  handleButtonClick: (button: string) => void;
}) => {
  return (
    <div className={`${styles.layout} ${styles.digits}`}>
      <div className={styles.row}>
        <KeyboardNumbers
          handleButtonClick={handleButtonClick}
          numbers={[1, 2, 3]}
        />
        <button
          onClick={() => handleButtonClick(BACKSPACE_NAME)}
          className={styles.backspace}
        >
          <Image
            priority
            src={backspace}
            alt="backspace"
            width={27}
            height={20}
          />
        </button>
      </div>

      <div className={`${styles.row} ${styles.second}`}>
        <KeyboardNumbers
          handleButtonClick={handleButtonClick}
          numbers={[4, 5, 6]}
        />
        <button
          onClick={() => setShowKeyboard(false)}
          className={styles.enterKey}
        >
          <Image
            priority
            src={enterKey}
            alt="enterKey"
            width={26}
            height={26}
          />
        </button>
        <KeyboardNumbers
          handleButtonClick={handleButtonClick}
          numbers={[7, 8, 9]}
        />
      </div>

      <div className={styles.row}>
        <button
          onClick={() => setIsDigitLayout(false)}
          className={styles.switchToLetterssBtn}
        >
          Aa
        </button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button className={styles.point} onClick={() => handleButtonClick('.')}>
          .
        </button>
        <button
          onClick={() => setShowKeyboard(false)}
          className={styles.keyboardIcon}
        >
          <Image
            priority
            src={keyboardIcon}
            alt="keyboardIcon"
            width={30}
            height={16}
          />
        </button>
      </div>
    </div>
  );
};

export default DigitsLayout;
