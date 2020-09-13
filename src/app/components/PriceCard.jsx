import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

export default function PriceCard() {
  return (
    <div style={{ paddingBottom: "30px" }}>
    <Card style={{ maxWidth: "300px"}}>
      <CardBody>
        <CardTitle>₹20,199</CardTitle>
        <p>8N/9D, 2 Adults.</p>

      </CardBody>
      <CardFooter>
        <Button>Book Now</Button>
      </CardFooter>
    </Card>
    </div>
  );
}
