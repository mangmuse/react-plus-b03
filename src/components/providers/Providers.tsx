import { PropsWithChildren } from "react";
import QueryProvider from "./QueryProvider";
import { ModalProvider } from "@/services/modal/modal.context";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <ModalProvider>{children}</ModalProvider>
    </QueryProvider>
  );
};

export default Providers;
