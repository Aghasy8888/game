import { ReactNode } from 'react';
import styles from './FooterButton.module.scss';

interface FooterButtonProps {
  onClick: () => void;
  title: string;
  order: string;
  from?: string;
  buttonInfo?: ReactNode;
}

const FooterButton = ({
  onClick,
  order,
  title,
  from = '',
  buttonInfo,
}: FooterButtonProps) => {
  const classname = `from${from}`;

  return (
    <div className={`${styles.buttonContainer} ${styles[classname]}`}>
      <button onClick={onClick}>
        <h3>
          {title}
          <span> {`“${order}"`}</span>
        </h3>
      </button>

      {buttonInfo}
    </div>
  );
};

export default FooterButton;
