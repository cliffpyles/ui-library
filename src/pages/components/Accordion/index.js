import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Accordion, {AccordionItem, Docs} from '@components/Accordion'

export default () => {
  const accordionExpandStates = {
    item1: true,
    item2: false,
    item3: false,
    item4: false
  }

  return (
    <Documentation docs={Docs}>
      <Example heading="Accordion Example">
        <Accordion>
          <AccordionItem title="item 1" isExpanded={accordionExpandStates.item1}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </AccordionItem>
          <AccordionItem title="item 2" isExpanded={accordionExpandStates.item2}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </AccordionItem>
          <AccordionItem title="item 3" isExpanded={accordionExpandStates.item3}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </AccordionItem>
          <AccordionItem title="item 4" isExpanded={accordionExpandStates.item4}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </AccordionItem>
        </Accordion>
      </Example>
    </Documentation>
  )
}
