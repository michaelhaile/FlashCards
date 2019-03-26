import React, {useState} from 'react';
import FlipButton from './FlipButton'
import styles from './Card.module.css'

const Card = (props) => {
    const [state, setState] = useState({flip:false, showText:props.showButtonText, scrollerEnd:false});
    return (
        <div className={styles.cardContainer} onClick={() => setState({flip:!state.flip, showText: false})}>
            <div className={state.flip ? styles.card + ' ' + styles.flipCard : styles.card}>
                <div className={styles.cardFront}>
                    <div className={styles.inside}>
                        <div className={styles['content']}>
                            <div>{props.data.front}</div>
                        </div>
                    </div>
                    <FlipButton showText={state.showText}/>
                </div>

                {props.data.back.type === 'sentence' && (
                    <div className={styles.cardBack}>
                        <div className={styles.inside}>
                            <div className={styles.content}>
                                <div>{props.data.back.content}</div>
                            </div>
                        </div>
                        <FlipButton />
                    </div>)}

                {props.data.back.type === 'img' && (
                    <div className={styles.cardBack + ' ' + styles.fullImage} style={{backgroundImage:props.data.back.content}}>
                        <div className={styles.inside} />
                        <FlipButton />
                    </div>)}

                {props.data.back.type === 'paragraph' && (
                    <div className={styles.cardBack}>
                        <div className={state.scrollerEnd ? styles.paragraph + ' ' + styles.scrollerEnd : styles.paragraph}
                             onScroll={(e) => setState({flip:state.flip, scrollerEnd: e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight})}>
                            <div className={styles.content}>{props.data.back.content}</div>
                            <FlipButton />
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default Card;
