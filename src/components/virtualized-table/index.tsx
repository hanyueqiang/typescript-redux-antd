/**
 * dataSource 数据数组 object[]
 * columns 表格列 string[]
 * rowKey 表格行key的取值 number | string
 * rowHeight tr固定高度 number
 * visibleHeight 可视区域高度 number
 * hasOrder 是否含有序号 boolean
 * orderTitle 序号标题 string
 */
import React, { FC, useEffect, useState, useRef, memo } from 'react'
import { Empty } from 'antd';
import './index.less'

interface DataProps {
  [key:string]: any
}
interface VirtualProps {
  dataSource: DataProps[]
  columns: string[]
  rowKey?: number | string
  hasOrder?: boolean
  orderTitle?: string
  rowHeight?: number
  visibleHeight?: number
}

const Index: FC<VirtualProps> = (props) => {
  const {
    dataSource = [],
    columns = [],
    rowKey,
    hasOrder = false,
    orderTitle = '序号',
    rowHeight = 40,
    visibleHeight = 800,
  } = props
  const [startIndex, setStartIndex] = useState(0)
  const [placeHeight, setPlaceHeight] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)
  const [visibleCount, setVisibleCount] = useState(0)
  const [showData, setShowData] = useState<DataProps[]>([])
  const virtualizedRef = useRef<any>(null)

  useEffect(() => {
    const placeH = ((dataSource.length) * rowHeight) + rowHeight
    setPlaceHeight(placeH)
    setVisibleCount(Math.floor(visibleHeight / rowHeight) + 2)
  }, [dataSource, rowHeight])

  useEffect(() => {
    const onScrollChange = (e: React.WheelEvent) => {
      const top = (e.target as HTMLElement).scrollTop
      const index = Math.floor(top / rowHeight)
      setScrollTop(top)
      setStartIndex(index ? index + 1 : 0)
    }
    virtualizedRef.current.addEventListener('scroll', onScrollChange)
    return () => {
      if (virtualizedRef.current) {
        virtualizedRef.current.removeEventListener('scroll', onScrollChange)
      }
    }
  }, [])

  useEffect(() => {
    const data = dataSource.slice(startIndex, startIndex + visibleCount)
    setShowData(data)
  }, [startIndex, visibleCount, dataSource])

  return (
    <div className="galois_virtualized_container" ref={virtualizedRef} style={{ height: visibleHeight }}>
      <table
        style={{ transform: `translate3d(0px, ${scrollTop}px, 0)` }}
        className="galois_virtualized_table"
      >
        <thead>
          <tr>
            {hasOrder && <th key="galois_index">{orderTitle}</th>}
            {columns.map(values => <th key={values}>{values}</th>)}
          </tr>
        </thead>
        <tbody>
          {showData.map((item, index) => (
            <tr key={rowKey ? item[rowKey] : index}>
              {hasOrder && <td>{startIndex + index + 1}</td>}
              {columns.map((values, ind) => <td key={ind}>{item[values]}</td>)}
            </tr>))}
        </tbody>
      </table>
      {showData.length === 0 &&  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      <div className="galois_virtualized_placeholder" style={{ height: placeHeight }} />
    </div>
  )
}

export default memo(Index)

