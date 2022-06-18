import { useEffect } from "react";

const ReturnToRoot = () => {
  useEffect(() => {
    window.location.href = "/";
  });
  return <></>;
};

export default ReturnToRoot;
