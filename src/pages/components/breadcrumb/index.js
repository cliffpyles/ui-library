import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Breadcrumb, {BreadcrumbItem} from '@components/Breadcrumb'

export default ({data, docs}) => {
  return (
    <Documentation docs={docs}>
      <Example heading="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem path="/">home</BreadcrumbItem>
          <BreadcrumbItem path="/categories">categories</BreadcrumbItem>
          <BreadcrumbItem path="/categories/web">web</BreadcrumbItem>
          <BreadcrumbItem>css</BreadcrumbItem>
        </Breadcrumb>
      </Example>
    </Documentation>
  )
}
