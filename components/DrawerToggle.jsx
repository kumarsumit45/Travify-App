import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import COLORS from "../constants/colors";
import { useNavigation } from '@react-navigation/native'
import { DrawerActions } from '@react-navigation/native'

const DrawerToggle = () => {
  const navigation = useNavigation(); 
  
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    //   style={{ marginLeft: 0, marginTop: 0 }}
    >
      <Ionicons name="menu" size={32} color={COLORS.button} />
    </TouchableOpacity>
  );
}

export default DrawerToggle