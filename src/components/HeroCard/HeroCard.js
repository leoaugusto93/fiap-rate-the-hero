import styled from 'styled-components';
import Card from '../../common-components/Card/Card';
import { Box } from 'reflexbox';
import { BorderRadiuses, Colors, Shadows, Spaces } from '../../shared/DesignTokens';
import { Caption } from '../../common-components/Caption/Caption';
import { HeadingTwo } from '../../common-components/HeadingTwo/HeadingTwo';
import { Description } from '../../common-components/Description/Description';
import { ButtonLink } from '../../common-components/ButtonLink/ButtonLink';

const InformationGrid = styled(Box)`
    display: grid;
    grid-template-columns: 1fr 70px;
    gar: ${Spaces.TWO};
`;

const HeroAvatar = styled.div`
    width: 100%;
    height: 70px;
    box-shadow: ${Shadows.ONE};
    border-radius: ${BorderRadiuses.ONE};
    background-image: url('${props => props.src}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export default function HeroCard({secretIdentity, name, picture, universe}) {
    return <Card>
        <InformationGrid p={Spaces.TWO}>
            <Box>
                <Caption color={Colors.GRAY_600}>{secretIdentity}</Caption>
                <Box mb={Spaces.ONE}>
                    <HeadingTwo>{name}</HeadingTwo>
                </Box>
                <Description as="div" color={Colors.GRAY_700}>
                    <strong>Universo:</strong> {universe}
                </Description>
                <Description as="div" color={Colors.GRAY_700}>
                    <strong>Nota atual:</strong> -
                </Description>
            </Box>
            <HeroAvatar src={picture} />
        </InformationGrid>
        <Box width="87px">
            <ButtonLink>Ver mais</ButtonLink>
        </Box>
    </Card>
}