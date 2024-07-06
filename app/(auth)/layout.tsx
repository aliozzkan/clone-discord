import { PropsWithChildren } from "react";

const AuthLayout = (props: PropsWithChildren) => {
  return <div className="h-full justify-center items-center flex">{props.children}</div>;
};

export default AuthLayout;
