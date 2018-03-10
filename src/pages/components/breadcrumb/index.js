import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Breadcrumb, {BreadcrumbItem} from '@components/Breadcrumb'

export default () => {
  return (
    <Documentation>
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
