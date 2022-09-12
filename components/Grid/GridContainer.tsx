import { JSX } from "https://esm.sh/v94/preact@10.10.6/jsx-runtime/src/index.d.ts";

interface GridContainerProps {
  children: JSX.Element | JSX.Element[];
}
export default function GridContainer(props: GridContainerProps) {
  const { children } = props;
  return (
    <div class="grid md:grid-cols-2 sm:grid-cols-1 md:gap-y-6 sm:gap-y-0 ">
      {children}
    </div>
  );
}
