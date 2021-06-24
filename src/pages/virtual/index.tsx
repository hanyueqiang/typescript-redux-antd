import React, { useEffect, useState } from 'react'
import CommonTable from './components/commonTable'
import VirtualTable from './components/virtualTable'
import styles from './index.less'

export interface ListProps {
  count: number;
  average_money: number;
  name: string;
}

const Index = () => {
  const [list, setList] = useState<ListProps[]>([])
  useEffect(() => {
    function getList() {
      const result = []
      for (let i = 0; i<10000; i++ ) {
        const count = Math.floor(Math.random() * 1000)
        const obj = {
          ind: i,
          count,
          average_money: count,
          name: `name${count}`,
          name1: `name1${count}`,
          name2: `name2${count}`,
          name3: `name3${count}`,
        }
        result.push(obj)
      }
      setList(result)
    }
    getList()
  }, [])
  return (
    <div className={styles.virtual}>
      <CommonTable dataSource={list} />
      <VirtualTable dataSource={list} />
    </div>
  )
}

export default Index
