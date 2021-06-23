import React from 'react'
import CommonTable from './components/commonTable'
import VirtualTable from './components/virtualTable'
import styles from './index.less'

const Index = () => {
  return (
    <div className={styles.virtual}>
      <CommonTable />
      <VirtualTable />
    </div>
  )
}

export default Index
