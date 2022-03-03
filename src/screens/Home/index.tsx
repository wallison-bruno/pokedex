import {Container, Footer, BoxContent} from './styles';
import React, {useState} from 'react';
import {Header} from '../../components/Header';
import {useWindowDimensions} from 'react-native';
import {useTheme} from 'styled-components';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ExitButton} from '../../components/ExitButton';
import {PageEmpty} from '../../components/PageEmpty';
import {PageSearch} from '../../components/PageSearch';
import {PageSeeAll} from '../../components/PageSeeAll';
import {DarkButton} from '../../components/DarkButton';
import {IconCounter} from '../../components/IconCounter';

import {usePokemons} from '../../hooks/usePokrmons';
import {useAuth} from '../../hooks/auth';

const renderScene = SceneMap({
  first: () => {
    return <PageEmpty />;
  },
  second: () => {
    return <PageSearch />;
  },
  third: () => {
    return <PageSeeAll />;
  },
});
export function Home() {
  const theme = useTheme();
  const {listLikedPokemon} = usePokemons();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(2);
  const [routes] = useState([
    {key: 'first', title: 'Favoritos'},
    {key: 'second', title: 'Procurar'},
    {key: 'third', title: 'Ver todos'},
  ]);
  const {signOut} = useAuth();

  return (
    <Container>
      <Header />
      <BoxContent>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={{
                backgroundColor: theme.colors.background,
                elevation: 0,
              }}
              tabStyle={{
                margin: 6,
                flexDirection: 'row-reverse',
              }}
              indicatorStyle={{
                borderWidth: 1,
                borderColor: 'black',
              }}
              labelStyle={{
                fontSize: 16,
                color: 'black',
                fontFamily: theme.fonts.medium,
                textTransform: 'capitalize',
              }}
              renderIcon={item => {
                if (
                  item.route.key === 'first' &&
                  listLikedPokemon.length !== 0
                ) {
                  return <IconCounter numero={listLikedPokemon.length} />;
                }
                return;
              }}
            />
          )}
        />
      </BoxContent>
      <Footer>
        <DarkButton />
        <ExitButton onPress={signOut} />
      </Footer>
    </Container>
  );
}
