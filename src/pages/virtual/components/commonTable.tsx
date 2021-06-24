

import React, { FC, useState } from 'react'
import { Button, Table } from 'antd'
import { ListProps } from '../index'
import styles from '../index.less'

interface CommonProps {
  dataSource: ListProps[]
}
interface ColsProps {
  dataIndex: string;
  title: string;
}

const Index: FC<CommonProps> = (props) => {
  const { dataSource } = props
  const [data, setData] = useState<ListProps[]>([])
  const [columns, setColumns] = useState<ColsProps[]>([])

  const getCols = (obj: ListProps) => {
    const cols = Object.keys(obj)
    const result = []
    for (let i=0; i<cols.length; i++) {
      const obj = {
        dataIndex: cols[i],
        title: cols[i]
      }
      result.push(obj)
    }
    return result
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
      <Table
        rowKey="ind"
        dataSource={data}
        size="middle"
        columns={columns}
        scroll={{y: 500, x: "max-content"}}
        pagination={false}
      />
    </div>
  )
}

export default Index
