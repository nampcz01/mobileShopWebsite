import { useCallback } from "react";
import { useNavigate as useNavigateHook } from "react-router-dom";

const useNavigate = () => {
    const navigateToFunc = useNavigateHook();

    const navigateTo = useCallback((path: string, state = {}) => {
        navigateToFunc(path, {state});
    }, [navigateToFunc])

    const navigateWithClear = useCallback((path: string, state = {})=>{
        navigateToFunc(path, {replace: true, state});
    },[navigateToFunc])

    const navigateBack = useCallback((step=1) => {
        navigateToFunc(-step);
    }, [navigateToFunc])
    
    return {navigateTo, navigateWithClear, navigateBack};
}

export default useNavigate;

