import styles from './ResearchCard.module.css';
import { useState } from 'react';

const ResearchCard = ({data}) => {

    const {title, snippet, tags} = data

    const [showMore, setShowMore] = useState(false);

    // const title = "Lorem lorem "
    // const snippet = "“ lorem They're great on hills but maintenance is a pain” "
    // const tags = ["tag1", "tag2", "tag3", "premium"]

     if (!showMore) {
        return (
          <div className={styles.researchCard}>
            <div className={styles.heading}>
              <div className={styles.titletext}>{title}</div>
              <div className={styles.type}>
                <div className={styles.titletext1}>Research</div>
              </div>
            </div>
            <button
              className={styles.displaytoggle}
              onClick={() => setShowMore(true)}
            >
              <div className={styles.showMore}>Show More +</div>
            </button>
          </div>
        );
      }

    return (
            <div className={styles.researchCard}>
                <div className={styles.heading}>
                        <div className={styles.titletext}>{title}</div>
                        <div className={styles.type}>
                            <div className={styles.titletext1}>Research</div>
                        </div>
                </div>
                <div className={styles.contents}>
                        <div className={styles.information}>
                            <div className={styles.quote}>{snippet}</div>
                        
                            <div className={styles.source}>Reddit</div>
                        </div>
                            <div className={styles.tagArray}>
                                  {tags.map((tag, index) => (
                                    <i className={styles.tag} key={index}>
                                      {tag}
                                    </i>
                                  ))}
                                </div>
                </div>
                
                <button onClick={() => setShowMore(false)} className={styles.displaytoggle}>
                        <div className={styles.showMore}>Show Less -</div>
                </button>
            </div>);
};

export default ResearchCard;
