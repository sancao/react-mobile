import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

const Navigation = TabNavigator({
    PeopleList: { screen: PeopleList },
   /*  CompanyList: { screen: CompanyList }, */
},
{
navigationOptions: ({navigation}) => ({
   tabBarLabel: 'people',
}),
tabBarComponent: TabBarBottom,
tabBarPosition: 'bottom',
animationEnabled: false,
swipeEnabled: false
});

export default Navigation;