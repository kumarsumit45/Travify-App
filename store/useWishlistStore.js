import { create } from 'zustand';

const useWishlistStore = create((set) => ({
  wishlist: [],

  // Add hotel to wishlist
  addToWishlist: (hotel) =>
    set((state) => {
      // Check if hotel already exists in wishlist
      const exists = state.wishlist.some((item) => item.id === hotel.id);
      if (exists) {
        return state;
      }
      return { wishlist: [...state.wishlist, { ...hotel, wishlist: true }] };
    }),

  // Remove hotel from wishlist
  removeFromWishlist: (hotelId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== hotelId),
    })),

  // Toggle wishlist status
  toggleWishlist: (hotel) =>
    set((state) => {
      const exists = state.wishlist.some((item) => item.id === hotel.id);
      if (exists) {
        return {
          wishlist: state.wishlist.filter((item) => item.id !== hotel.id),
        };
      } else {
        return {
          wishlist: [...state.wishlist, { ...hotel, wishlist: true }],
        };
      }
    }),

  // Check if hotel is in wishlist
  isInWishlist: (hotelId) => (state) =>
    state.wishlist.some((item) => item.id === hotelId),

  // Clear all wishlist
  clearWishlist: () => set({ wishlist: [] }),
}));

export default useWishlistStore;
