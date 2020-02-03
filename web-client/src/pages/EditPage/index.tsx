import React from 'react';
import {
    IconButton,
    getColorFromRGBA,
    IButtonStyles
} from 'office-ui-fabric-react';
import { useHistory, useParams } from 'react-router-dom';
import { IApiService } from '../../services/ApiService';
import './styles.css';

type propsType = {
    apiService: IApiService;
};

const backButtonStyle: IButtonStyles = {
    root: [
        {
            width: 40,
            height: 40
        }
    ],
    rootHovered: [
        {
            background: getColorFromRGBA({
                r: 255,
                b: 255,
                g: 255,
                a: 20
            }).str
        }
    ]
};

const EditPage: React.FC<propsType> = ({ apiService }) => {
    const history = useHistory();
    const { id } = useParams();

    const onBackButtonClick = (): void => {
        if (history.length == 0) {
            history.push('/');
            return;
        }
        history.goBack();
    };

    return (
        <>
            <header id="edit-page-header">
                <IconButton
                    iconProps={{ iconName: 'Back' }}
                    styles={backButtonStyle}
                    onClick={e => onBackButtonClick()}
                />
            </header>
            <div className="edit-page">
                <p>editar contato de id = {id}</p>
            </div>
        </>
    );
};

export default EditPage;
