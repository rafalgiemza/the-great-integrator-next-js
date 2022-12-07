import { Card, Grid, Text, Progress } from "@nextui-org/react";

export default function CardScore({value, sourceImg, sourceText, category, img }: any) {
  const {min, max, actual} = value

  return (
    <Card css={{ p: "$6", m: "$6", mw: "400px" }}>
      <Card.Header>
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={3} >
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <img
                alt="nextui logo"
                src={sourceImg}
                width="34px"
                height="34px"
                />
            </div>
          </Grid>
          <Grid xs={6}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Text h4 css={{ m: "$2", lineHeight: "$xs" }}>
             { sourceText}
            </Text>
            <Text h4 css={{ m: "$2", lineHeight: "$xs" }}>
             { category }
            </Text>
          </div>
          </Grid>
          <Grid xs={3} >
            <div style={{display: 'flex', flexDirection: 'column'}}>
              score: {actual}
            </div>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>

      <Progress color="primary" min={min} max={max} value={actual} />
      </Card.Body>
      <Card.Footer>

      </Card.Footer>
    </Card>
  );
}
