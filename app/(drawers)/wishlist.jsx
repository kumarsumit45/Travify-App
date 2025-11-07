import { useEffect } from "react";
import { useRouter } from "expo-router";

const WishlistRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the tab wishlist screen
    router.replace("/(drawers)/(tabs)/wishlist");
  }, []);

  return null;
};

export default WishlistRedirect;
