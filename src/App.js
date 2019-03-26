import React from 'react';
import Card from "./components/Card";
import {data} from "./data";
import styles from "./App.module.css";

const App = () => {
    let id = 0;
    return (
        <div className={styles.container}>
            <h1>{data.header}</h1>
            <div className={styles.cardContainer}>
                { data.flashCards.map(card => <Card key={id++} data={card} showButtonText={id - 1 === 0}/>) }
            </div>

        </div>
    );
};

export default App;
