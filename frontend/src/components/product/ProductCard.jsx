import { FunctionComponent, useState } from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({data}) => {

	const {title, image, summary, tags} = data
  const [showMore, setShowMore] = useState(false);

//   const title = "Lorem VanMoof SS Electric Bike";
//   const image = "https://via.placeholder.com/100";
//   const summary = "“ Lorem They're great on hills but maintenance is a pain”";
//   const tags = ["tag1", "tag2", "city", "premium"];

  if (!showMore) {
    return (
      <div className={styles.productCard}>
        <div className={styles.heading}>
          <div className={styles.titletext}>{title}</div>
          <div className={styles.type}>
            <div className={styles.titletext1}>Product</div>
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
    <div className={styles.productCard}>
      <div className={styles.heading}>
        <div className={styles.titletext}>{title}</div>
        <div className={styles.type}>
          <div className={styles.titletext1}>Product</div>
        </div>
      </div>
      <div className={styles.contents}>
        <div className={styles.visual}>
          {image && <img className={styles.imageIcon} alt="" src={image} />}
          <div className={styles.sourceFrame}>
            <div className={styles.quote}>{summary}</div>
          </div>
        </div>
        {/* <div className={styles.tagArray}>
          					<i className={styles.tag}>electric</i>
          					<i className={styles.tag}>city</i>
          					<i className={styles.tag}>premium</i>
        				</div> */}
        <div className={styles.tagArray}>
          {tags && tags.map((tag, index) => (
            <i className={styles.tag} key={index}>
              {tag}
            </i>
          ))}
        </div>
      </div>

      <button
        className={styles.displaytoggle}
        onClick={() => setShowMore(false)}
      >
        <div className={styles.showMore}>Show Less -</div>
      </button>
    </div>
  );
};

export default ProductCard;
