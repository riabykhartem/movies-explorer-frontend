import { usePromiseTracker } from "react-promise-tracker";
import Preloader from "../components/Preloader/Preloader";

export const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return (promiseInProgress && <Preloader/>)
};