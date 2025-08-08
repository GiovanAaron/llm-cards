import styles from './ForumCard.module.css';
import { useState } from 'react';

const ForumCard = ({data}) => {

	// console.log(data)
	
	
	const [showMore, setShowMore] = useState(false);

  	const {content, username, tags, title, source} = data
	// const title = "Lorem lorem "
	// const content = "“ lorem They're great on hills but maintenance is a pain” "
	// const username = "lorem u/eco-rider"
	// const tags = ["tag1", "tag2", "tag3", "premium"]

	 if (!showMore) {
		return (
		  <div className={styles.forumCard}>
			<div className={styles.heading}>
			  <div className={styles.titletext}>{title}</div>
			  <div className={styles.type}>
				<div className={styles.titletext1}>Forum</div>
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
    		<div className={styles.forumCard}>
      			<div className={styles.heading}>
        				<div className={styles.titletext}>{title}</div>
        				<div className={styles.type}>
          					<div className={styles.titletext1}>Forum</div>
        				</div>
      			</div>
      			<div className={styles.contents}>
        				<div className={styles.information}>
          					<div className={styles.quote}>"{content}"</div>
          					<div className={styles.author}>- {username}</div>
          					<div className={styles.source}>{source}</div>
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

export default ForumCard;
