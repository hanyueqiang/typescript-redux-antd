

import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import styles from '../index.less'

const Index = () => {
  const [data, setData] = useState([])
  const [columns, setColumns] = useState([])

  return (
    <div className={styles.virtual_content}>
      <Table
        dataSource={data}
        columns={columns}
        scroll={{y: 800}}
      />
    </div>
  )
}

export default Index
