import NewsCard from '../NewsCard';
import styles from './ActionNews.module.scss';
import Link from 'next/link';
import { NEWS } from '../../constants';
const ActionNews = ({ news }: { news: INews[] }) => {
  return (
    <section className={styles.actionNewsCtn}>
      <div className={styles.titleAndBtnCtn}>
        <h5>последствия в новостях</h5>
        <Link href={NEWS}>
          <button>смотреть все</button>
        </Link>
      </div>

      <section className={styles.news}>
        {news?.map((news, i) => <NewsCard news={news} key={i} />)}
      </section>
    </section>
  );
};

export default ActionNews;
