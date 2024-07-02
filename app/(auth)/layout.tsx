import { PropsWithChildren } from "react";

const AuthLayout = (props: PropsWithChildren) => {
  return <div>{props.children}</div>;
};

export default AuthLayout;
