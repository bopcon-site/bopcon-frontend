import { create } from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';

const useAuthStore = create(
  devtools(persist(combine<AuthState, AuthActions>({})))
);

export default useAuthStore;
