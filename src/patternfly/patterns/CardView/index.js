import React from 'react'
import './styles.scss'
import Card, {CardHeader, CardBody, CardFooter} from '@components/Card'
import Grid from '@layouts/Grid'

export default () => {
  return (
    <div className="pf-p-card-view">
      <Grid>
        <Card>
          <CardHeader>
            <h3>Card 1 Header</h3>
          </CardHeader>
          <CardBody>
            <p>Card 1 body content</p>
          </CardBody>
          <CardFooter>
            <p>Card 1 footer content</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <h3>Card 2 Header</h3>
          </CardHeader>
          <CardBody>
            <p>Card 2 body content</p>
          </CardBody>
          <CardFooter>
            <p>Card 2 footer content</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <h3>Card 3 Header</h3>
          </CardHeader>
          <CardBody>
            <p>Card 3 body content</p>
          </CardBody>
          <CardFooter>
            <p>Card 3 footer content</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <h3>Card 4 Header</h3>
          </CardHeader>
          <CardBody>
            <p>Card 4 body content</p>
          </CardBody>
          <CardFooter>
            <p>Card 4 footer content</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <h3>Card 5 Header</h3>
          </CardHeader>
          <CardBody>
            <p>Card 5 body content</p>
          </CardBody>
          <CardFooter>
            <p>Card 5 footer content</p>
          </CardFooter>
        </Card>
      </Grid>
    </div>
  )
}
