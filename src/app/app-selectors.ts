import { AppRootState } from "./store";

export const selectAppStatus = (state: AppRootState) => state.app.status

export const selectAppErrors = (state: AppRootState) => state.app.error