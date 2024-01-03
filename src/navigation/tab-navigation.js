// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { colors } from 'config/colors';
// import * as React from 'react';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import DepartmentTab from 'screens/department-tab';
// import HomeTab from 'screens/home-tab';
// import Search from 'screens/search';
// import UserTab from 'screens/user-tab';
// const Tab = createBottomTabNavigator();
// const BottomTab = createNativeStackNavigator();
// const TabNavigator = () => {

//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         headerShown: false,
//         unmountOnBlur: true,
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName = 'home';
//           if (route.name === 'HomeTab') {
//             iconName = 'home';
//           } else if (route.name === 'Departments') {
//             iconName = 'shopping-bag';
//           } else if (route.name === 'Search') {
//             iconName = 'search';
//           } else if (route.name === 'UserTab') {
//             iconName = 'user';
//           }
//           // You can return any component that you like here!
//           return <FontAwesome name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: colors.primary,
//         tabBarInactiveTintColor: 'gray',
//       })}
    

//       >
//       <BottomTab.Screen name="HomeTab" component={HomeTab} />
//       <BottomTab.Screen name="Departments" component={DepartmentTab} />
//       <BottomTab.Screen name="Search" component={Search} />
//       <BottomTab.Screen name="UserTab" component={UserTab} />
//     </Tab.Navigator>
//   );
// };
// export default TabNavigator;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from 'config/colors';
import * as React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DepartmentTab from 'screens/department-tab';
import HomeTab from 'screens/home-tab';
import Search from 'screens/search';
import UserTab from 'screens/user-tab';

const Tab = createBottomTabNavigator();
const BottomTab = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        headerShown: false,
        unmountOnBlur: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = 'home';
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === 'Departments') {
            iconName = 'handbag';
            return <SimpleLineIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Search') {
            iconName = 'search';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'More') {
            iconName = 'dots-circle';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}
   
    >
      <BottomTab.Screen name="HomeTab" component={HomeTab} />
      <BottomTab.Screen name="Departments" component={DepartmentTab} />
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen name="More" component={UserTab} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
