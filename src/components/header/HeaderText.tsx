import { Box, Typography } from '@mui/material';

type IProps = {
    title: string,
    subTitle?: string,
}

const Header = (props: IProps) => {    
    const {title, subTitle} = props;

  return (
    <Box>
        <Typography variant='h5' fontWeight='bold'>{title}</Typography>
        <Typography variant='h6'>{subTitle}</Typography>
    </Box>
  )
}

export default Header