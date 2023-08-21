import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

function App() {
  const theme = useTheme();

  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          marginTop: theme.spacing(2),
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card sx={{ maxWidth: 340, padding: theme.spacing(2) }}>
          <Stack spacing={theme.spacing(2)}>
            <Typography variant="h1">
              Fone de Ouvido Profissional In-Ear Shure SE215
            </Typography>
            <Box display="flex" justifyContent="center">
              <img
                src="/images/fone-shure.png"
                alt="Imagem de um fone de ouvido shure transparente"
                width={240}
                height={240}
              />
            </Box>

            <Typography variant="h2">R$ 1.073,00</Typography>

            <CardContent>
              <Typography variant="body1" color="text.secondary">
                Inspirado na tecnologia dos monitores in-ear usados pelos
                músicos profissionais. Áudio de qualidade profissional com
                reforço de graves. Tecnologia Sound Isolating™ bloqueia o ruído
                ambiental e oferece áudio de qualidade profissional. 1 Driver
                dinâmico para graves, médios e agudos.
              </Typography>
            </CardContent>

            <Button
              variant="contained"
              aria-label="Botão comprar, adiciona o produto ao carrinho"
            >
              Comprar
            </Button>
          </Stack>
        </Card>
      </Container>
    </>
  );
}

export default App;
