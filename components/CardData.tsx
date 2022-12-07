import { Card, Grid, Text } from "@nextui-org/react";

export default function CardData({value, sourceImg, sourceText, category, img }: any) {
  var str = JSON.stringify(value, null, 2);

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

        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        {str}
      </Card.Body>
    </Card>
  );
}
