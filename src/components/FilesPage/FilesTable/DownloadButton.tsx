import { FC } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
interface Props {
    fileName: string;
}


const DownloadButton: FC<Props> =  ({fileName}) => {
    return (
        <Button href= {`http://localhost:8003/download?file_name=${(fileName)}`} variant="contained" color="primary">
        <DownloadIcon />
    </Button>
    );
};

export default DownloadButton;