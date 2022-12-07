import { Card, Grid, Text, Link, Button } from "@nextui-org/react";

const copyLInk = (url: string) => {
  navigator.clipboard.writeText(url)
}

export default function CardUrl({url, sourceImg, sourceText, category, img }: any) {
  return (
    <Card css={{ p: "$6", m: "$6", mw: "400px" }}>
      <Card.Header>
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={4} >
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <img
                alt="nextui logo"
                src={sourceImg}
                width="34px"
                height="34px"
                />
              <Button size="xs" css={{m: '$6'}} onClick={() => copyLInk(url)}>copy link</Button>
            </div>
          </Grid>
          <Grid xs={8}>
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
      <Link
          color="primary"
          target="_blank"
          href={url}
        >
          {url}
        </Link>
      </Card.Body>
      <Card.Footer>

      </Card.Footer>
    </Card>
  );
}
