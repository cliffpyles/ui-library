import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

const TableHeader = ({children, className = ''}) => {
  return (
    <thead className={`table__header ${className}`}>
      <tr>
        {children}
      </tr>
    </thead>
  )
}

const TableBody = ({children, className = ''}) => {
  return (
    <tbody className={`table__body ${className}`}>
      {children}
    </tbody>
  )
}

const TableRow = ({ className = '', keys = [], data = {} }) => {
  const cells = keys.map((key) => {
    let value = (data.hasOwnProperty(key)) ? data[key] : ''
    return (
      <td key={`row-${data.key}-${key}`}>{value}</td>
    )
  })
  return (
    <tr>{cells}</tr>
  )
}

export default ({className = '', columns = [], rows = []}) => {
  let headerCells = columns.map((column) => {
    return (
      <th key={column.key}>{column.name}</th>
    )
  })
  let keys = columns.map(column => column.key)
  let tableRows = rows.map((row) => {
    return (
      <TableRow key={row.key} keys={keys} data={row}/>
    )
  })
  return (
    <table className={`table ${className}`}>
      <TableHeader>
        {headerCells}
      </TableHeader>
      <TableBody>
        {tableRows}
      </TableBody>
    </table>
  )
}
