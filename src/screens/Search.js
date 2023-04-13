import styled from 'styled-components';
import HeroCard from '../components/HeroCard/HeroCard';
import { Box, Flex } from 'reflexbox';
import { Spaces } from '../shared/DesignTokens';
import SearchField from '../common-components/SearchField/SearchField';
import Button from '../common-components/Button/Button';

const HeroesGrid = styled(Box)`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Spaces.ONE_HALF};

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: ${Spaces.TWO};
    }
`;

export default function Search() {
    return (
        <>
            <Flex
                width={['100%', '600px']}
                mx={[Spaces.NONE, 'auto']}
                mt={[Spaces.THREE, Spaces.FIVE]}
                px={[Spaces.ONE, Spaces.NONE]}
                mb={[Spaces.TWO, Spaces.FOUR]}
            >
                <Box flexGrow="1">
                    <SearchField placeholder="Selecione o nome do herói..."></SearchField>
                </Box>
                <Box ml={Spaces.TWO}>
                    <Button>Buscar</Button>
                </Box>
            </Flex>
            <HeroesGrid px={[Spaces.ONE, Spaces.TWO]} pb={[Spaces.ONE, Spaces.TWO]}>
                <HeroCard
                    secretIdentity="Bruce Wayne"
                    name="Batman"
                    picture="https://i.uai.com.br/oQyJL4f1KVaK4TvFM2mkZXSfkkI=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2023/02/12/317708/batman-nos-quadrinhos-da-dc_1_59778.jpg"
                    universe="DC Comics"
                />
                <HeroCard
                    secretIdentity="Clark Kent"
                    name="Superman"
                    picture="https://t.ctcdn.com.br/5h_QCCK3BN14hQljPrRkEPr_C_c=/1245x700/smart/i677638.jpeg"
                    universe="DC Comics"
                />
            </HeroesGrid>
        </>
    );
}