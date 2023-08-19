import { Box } from '@mui/material';
import footerStyles from './Footer.styles'

const Footer = () => {

    return (
        <Box sx={footerStyles.footer}>
            Ⓒ {new Date().getFullYear()} Manasik India Pvt Ltd. All rights reserved
        </Box>
    )
}

export default Footer;