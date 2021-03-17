import { TypedUseSelectorHook, useSelector } from 'react-redux';

const useTypedSelector: TypedUseSelectorHook<ReducerType> = useSelector;

export default useTypedSelector;
