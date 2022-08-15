import { useRouter } from "next/router";
import { useEffect } from "react";

const ReturnToRoot = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return <></>;
};

export default ReturnToRoot;
