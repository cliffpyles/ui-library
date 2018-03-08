import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Table, { Docs } from '@components/Table'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Table">
        <Table
          columns={[
            {name: 'name', key: 'name'},
            {name: 'age', key: 'age'},
            {name: 'email', key: 'email'},
            {name: 'phone', key: 'phone'},
          ]}
          rows={[
            { key: 'jdoe', name: 'jdoe', age: 25, email: 'jdoe@jdoe.com', phone: '555-555-5555' },
            { key: 'asmith', name: 'asmith', age: 25, email: 'asmith@asmith.com', phone: '555-555-5555' },
            { key: 'bjones', name: 'bjones', age: 25, email: 'bjones@bjones.com', phone: '555-555-5555' },
            { key: 'cdoe', name: 'cdoe', age: 25, email: 'cdoe@cdoe.com', phone: '555-555-5555' },
            { key: 'dsmith', name: 'dsmith', age: 25, email: 'dsmith@dsmith.com', phone: '555-555-5555' },
            { key: 'ejones', name: 'ejones', age: 25, email: 'ejones@ejones.com', phone: '555-555-5555' },
          ]}
        />
      </Example>
    </Documentation>
  )
}
