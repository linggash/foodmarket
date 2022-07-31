import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {ItemListFood} from '..';
import {getFoodDataByTypes} from '../../../redux/action/home';

const NewTaste = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {newTaste} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes('new_food'));
  }, []);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {newTaste.map(item => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, []);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {popular.map(item => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
  );
};

const Recomended = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {recommended} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, []);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {recommended.map(item => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
  );
};

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '15%',
      marginLeft: '3%',
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const HomeTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);
  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recomended,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
