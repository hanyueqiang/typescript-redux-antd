
import React, { FC, useState } from 'react'
import { Button } from 'antd'
import VirtualTable from '@/components/virtualized-table'
import { ListProps } from '../index'
import styles from '../index.less'

interface VirtualProps {
  dataSource: ListProps[]
}

const Index: FC<VirtualProps> = (props) => {
  const { dataSource } = props
  const [data, setData] = useState<ListProps[]>([])
  const [columns, setColumns] = useState<string[]>([])

  const getCols = (obj: ListProps) => {
    return Object.keys(obj)
  }
  const onShow = () => {
    setData(dataSource)
    setColumns(getCols(dataSource[0]))
  }
  const onReset = () => {
    setData([])
    setColumns([])
  }
  return (
    <div className={styles.virtual_content}>
      <Button onClick={onShow} type="primary">点击展示</Button>
      <Button onClick={onReset} style={{marginLeft: 16}}>重置</Button>
      <VirtualTable dataSource={data} columns={columns} visibleHeight={480} />
    </div>
  )
}

export default Index
