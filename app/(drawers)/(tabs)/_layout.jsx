import { Tabs } from 'expo-router'
import COLORS from "../../../constants/colors"
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import DrawerToggle from '../../../components/DrawerToggle'
import { Ionicons } from '@expo/vector-icons'


const TabsLayout = () => {
    const insets = useSafeAreaInsets();
  return (
    <Tabs screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: COLORS.primary,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textDark,
        tabBarStyle: {
          height: 70 + insets.bottom,
          backgroundColor: COLORS.tabBackground,
          paddingTop: 5,
          paddingBottom: insets.bottom
        }
      }}>
        <Tabs.Screen name='index'
        options={{
              title: "Home",
              headerShown: false,
              headerLeft: () => <DrawerToggle />,
              headerStyle: {
                backgroundColor: COLORS.background,
                height: 50,
                elevation: 0,
                shadowOpacity: 0,
              },
              tabBarIcon: ({ size, color }) => (<Ionicons name="home-outline" size={size} color={color} />)
            }}/>
        <Tabs.Screen name='search'
        options={{
              title: "Search",
              tabBarIcon: ({ size, color }) => (<Ionicons name="search-outline" size={size} color={color} />)
            }}/>
        <Tabs.Screen name='chat'
        options={{
              title: "Chat",
              tabBarIcon: ({ size, color }) => (<Ionicons name="chatbubble-outline" size={size} color={color} />)
            }}/>
        <Tabs.Screen name='wishlist'
        options={{
              title: "Wishlist",
              tabBarIcon: ({ size, color }) => (<Ionicons name="heart-outline" size={size} color={color} />)
            }}/>
    </Tabs>
  )
}

export default TabsLayout