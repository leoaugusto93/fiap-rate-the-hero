import styled from 'styled-components';
import Card from '../../common-components/Card/Card';
import { Box } from 'reflexbox';
import { Colors, Spaces } from '../../shared/DesignTokens';
import { Caption } from '../../common-components/Caption/Caption';

const InformationGrid = styled(Box)`
    display: grid;
    grid-template-columns: 1fr 70px;
    gar: ${Spaces.TWO};
`;

export default function HeroCard({ children }) {
    return <Card>
        <InformationGrid p={Spaces.TWO}>
            <Box>
                <Caption color={Colors.GRAY_600}>Bruce Wayne</Caption>
                <Box mb={Spaces.ONE}>
                    
                </Box>
            </Box>
        </InformationGrid>
    </Card>
}