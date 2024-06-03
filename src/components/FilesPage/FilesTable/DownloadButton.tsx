import { FC } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import { FILES_API_URL } from '../../../api/env';
interface Props {
    fileName: string;
}


const DownloadButton: FC<Props> =  ({fileName}) => {
    return (
        <Button href= {`${FILES_API_URL}/download?file_name=${(fileName)}`} variant="contained" color="primary">
        <DownloadIcon />
    </Button>
    );
};

export default DownloadButton;