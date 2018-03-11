import React from 'react'
import Documentation from '@systemComponents/Documentation'
import Example from '@systemComponents/Example'
import Form, {FormControl} from '@components/Form'

export default () => {
  return (
    <Documentation className="is-form-documentation">
      <Example heading="Form">
        <Form>
          <FormControl>
            <label htmlFor="textboxExample">textbox</label>
            <input id="textboxExample" placeholder="textbox field"/>
          </FormControl>
          <FormControl>
            <label htmlFor="passwordExample">password</label>
            <input id="passwordExample" type="password" placeholder="password field"/>
          </FormControl>
          <FormControl>
            <label htmlFor="checkboxExample">checkbox</label>
            <input id="checkboxExample" type="checkbox" />
          </FormControl>
          <FormControl>
            <label htmlFor="radioExample">radio</label>
            <input id="radioExample" type="radio" />
          </FormControl>
          <FormControl>
            <input type="button" value="button"/>
            <input type="submit" value="submit"/>
          </FormControl>
          <FormControl>
            <label htmlFor="textareaExample">textarea</label>
            <textarea id="textareaExample" placeholder="textarea field"></textarea>
          </FormControl>
          <FormControl>
            <label htmlFor="selectExample">select</label>
            <select id="selectExample" placeholder="select field">
              <option value="option 1">option 1</option>
              <option value="option 2">option 2</option>
              <option value="option 3">option 3</option>
              <option value="option 4">option 4</option>
              <option value="option 5">option 5</option>
            </select>
          </FormControl>
        </Form>
      </Example>
    </Documentation>
  )
}
