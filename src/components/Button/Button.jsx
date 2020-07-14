import React, { Component } from 'react';
import styles from "./Button.module.scss";

class Button extends Component {
  state = {  }
  render() { 
  return <button className={styles.button} onClick={this.props.link}>{this.props.text}</button>;
  }
}
 
export default Button;