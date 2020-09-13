import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  Row,
  Col,
  Container
} from "shards-react";
import { List } from 'antd';

export default function BasicCardExample() {

  const data = [
   'Racing car sprays burning fuel into crowd.',
   'Japanese princes to wed commoner.'
 ];

  return (
    <Container style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Col>
      <Row style={{ paddingBottom: "80px" }}>
        <Card style={{ maxWidth: "1000px" }}>
          <CardHeader>Day 01  Bangkok</CardHeader>
          <CardBody style={{ display: 'flex' }}>
            <CardImg src="https://place-hold.it/300x200" />
            <div style={{ display: 'block', padding: "20px", borderStyle: "solid",borderColor: "#D0D0D0", borderWidth: "0.1px" }}>
              <CardTitle>Morning to Night</CardTitle>
              <p >Conviction u partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over</p>
            </div>
            <div style={{ display: 'block' }}>
              <List size="large"
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
              />
            </div>
          </CardBody>
        </Card>
      </Row>
      
      <Row style={{ paddingBottom: "80px" }}>
        <Card style={{ maxWidth: "1000px" }}>
          <CardHeader>Day 01  Bangkok</CardHeader>
          <CardBody style={{ display: 'flex' }}>
            <CardImg src="https://place-hold.it/300x200" />
            <div style={{ display: 'block', padding: "20px", borderStyle: "solid",borderColor: "#D0D0D0", borderWidth: "0.1px" }}>
              <CardTitle>Morning to Night</CardTitle>
              <p >Conviction u partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over</p>
            </div>
            <div style={{ display: 'block' }}>
              <List size="large"
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
              />
            </div>
          </CardBody>
        </Card>
      </Row>
      
      <Row style={{ paddingBottom: "80px" }}>
        <Card style={{ maxWidth: "1000px" }}>
          <CardHeader>Day 01  Bangkok</CardHeader>
          <CardBody style={{ display: 'flex' }}>
            <CardImg src="https://place-hold.it/300x200" />
            <div style={{ display: 'block', padding: "20px", borderStyle: "solid",borderColor: "#D0D0D0", borderWidth: "0.1px" }}>
              <CardTitle>Morning to Night</CardTitle>
              <p >Conviction u partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over</p>
            </div>
            <div style={{ display: 'block' }}>
              <List size="large"
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
              />
            </div>
          </CardBody>
        </Card>
      </Row>
      
      <Row style={{ paddingBottom: "80px" }}>
        <Card style={{ maxWidth: "1000px" }}>
          <CardHeader>Day 01  Bangkok</CardHeader>
          <CardBody style={{ display: 'flex' }}>
            <CardImg src="https://place-hold.it/300x200" />
            <div style={{ display: 'block', padding: "20px", borderStyle: "solid",borderColor: "#D0D0D0", borderWidth: "0.1px" }}>
              <CardTitle>Morning to Night</CardTitle>
              <p >Conviction u partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over</p>
            </div>
            <div style={{ display: 'block' }}>
              <List size="large"
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
              />
            </div>
          </CardBody>
        </Card>
      </Row>

    </Col>
    </Container>

  );
}
