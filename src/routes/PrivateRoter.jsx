import { Navigate } from "react-router-dom";

export const PrivateRoter = ({ Component, fallBackPath, isAllowed }) => {
  if (!!isAllowed) {
    return <Navigate to={fallBackPath} />;
  }

  return Component;
};
