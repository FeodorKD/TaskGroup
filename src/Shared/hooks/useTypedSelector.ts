import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../App/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector