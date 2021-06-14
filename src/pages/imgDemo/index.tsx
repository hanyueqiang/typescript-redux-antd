import React from 'react';
import HomePng from '@/assets/images/timg.jpeg';

import styles from './index.less'

const Index = () => {
  console.log(123)
  return (
    <div>
      <img src={HomePng} alt="" width="200"/>
      <div className={styles.bgstyle}>
        how are you
      </div>
    </div>
  )
}
export default Index
