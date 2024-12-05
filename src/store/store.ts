// import { StoreState } from 'types/store';
// import { create, StateCreator } from 'zustand';
// import { persist, PersistOptions } from 'zustand/middleware';

// // Define the PersistOptions for Zustand
// type MyPersist = (
//   config: StateCreator<StoreState>,
//   options: PersistOptions<StoreState>
// ) => StateCreator<StoreState>;

// const useStore = create<StoreState>(
//   (persist as MyPersist)((set) => ({}), {
//     name: 'store',
//     partialize: (state: StoreState): StoreState => ({
//       ...state,
//     }),
//   })
// );

// export default useStore;
