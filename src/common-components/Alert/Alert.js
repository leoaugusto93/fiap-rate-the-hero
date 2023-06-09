import styled from 'styled-components';
import {
    BorderRadiuses,
    Colors,
    FontSizes,
    Spaces,
} from '../../shared/DesignTokens';

const colorMapper = {
    info: {
        color: Colors.GRAY_700,
        backgroundColor: Colors.GRAY_200
    },
    success: {
        color: Colors.NEUTRAL_WHITE,
        backgroundColor: Colors.GREEN_800
    },
    error: {
        color: Colors.NEUTRAL_WHITE,
        backgroundColor: Colors.RED_800
    }
}

const Alert = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${BorderRadiuses.ONE};
    color ${(props) => colorMapper[props.type].color};
    background-color: ${(props) => colorMapper[props.type].backgroundColor};
    padding: ${(props) => props.small && Spaces.ONE} ${Spaces.ONE_HALF};
    font-size: ${(props) => props.small ? FontSizes.ONE_QUARTER : FontSizes.TWO};
`;

export default Alert;