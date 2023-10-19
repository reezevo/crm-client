import React from 'react'
import {
    Row,
    Col,
    Card,
    Table,
    Badge,
    Nav,
    Dropdown,
    ProgressBar,
  } from "react-bootstrap";
function Tables() {
  return (
    <div>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Heading With Background</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead className="thead-info">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
    </div>
  )
}

export default Tables