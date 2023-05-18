import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({children}: PropsWithChildren) => {
  const mount = document.getElementById("portal-root")!;

  return createPortal(children, mount)
};

export default Portal;
