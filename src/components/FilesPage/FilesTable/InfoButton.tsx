import { FC } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import { FILES_API_URL } from '../../../api/env';
interface Props {
    fileName: string;
}


const InfoButton: FC<Props> =  ({fileName}) => {
    return (
        <Button href= {`${FILES_API_URL}/metadata?file_name=${(fileName)}`} variant="text" color="primary">
        <InfoIcon />
    </Button>
    );
};

export default InfoButton;