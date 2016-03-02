import React from 'react';
import styles from '../Styles/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {welcomeName: 'Tew'};
  }

  render() {
 
    return (
      <div>
        <div className={styles.main_container}>
        <span className={styles.main_headline}>Welcome {this.state.welcomeName}</span>
        </div>
      </div>
    );
  }
}
