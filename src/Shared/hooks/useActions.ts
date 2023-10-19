import {useTypedDispatch} from "./useTypedDispatch";
import * as ActionCreators from '../../App/store/asyncActions/asyncProductActions'
import {bindActionCreators} from "redux";
export const useActions = () => {
    const dispatch = useTypedDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}