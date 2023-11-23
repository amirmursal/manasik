import { Box, Container, Link, Typography } from "@mui/material";
import footerStyles from "./Footer.styles";

const Footer = () => {
  return (
    <Box sx={footerStyles.footer}>
      <Container maxWidth="xs">
        <Typography variant="body2" color="text.secondary">
          {"Copyright © "}
          <Link color="inherit" href="#">
            Manasik India Pvt Ltd
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
