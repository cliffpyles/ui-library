import React from 'react'
import Documentation from '@system/Documentation'
import Example from '@system/Example'
import Tree, {TreeNode} from '@components/Tree'

export default ({data, docs}) => {
  return (
    <Documentation docs={docs}>
      <Example heading="Tree Example">
        <Tree>
          <TreeNode name="Desktop">
            <TreeNode name="example.txt" />
          </TreeNode>
          <TreeNode name="Documents">
            <TreeNode name="example.doc" />
            <TreeNode name="example.docx" />
            <TreeNode name="example.txt" />
          </TreeNode>
          <TreeNode name="Downloads">
            <TreeNode name="example.txt" />
            <TreeNode name="example.png" />
          </TreeNode>
          <TreeNode name="Pictures">
            <TreeNode name="example-1.png" />
            <TreeNode name="example-2.png" />
            <TreeNode name="example-3.png" />
          </TreeNode>
        </Tree>
      </Example>
    </Documentation>
  )
}
