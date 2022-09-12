import { asset } from "https://deno.land/x/fresh@1.1.0/runtime.ts";
import classnames from "https://deno.land/x/classnames/index.ts";

interface GridRowProps {
  header: string;
  body: string;
  buttonText: string;
  imagePath: string;
  href?: string;
  alt?: string;
  feat?: "left" | "right";
  conStyle?: string;
  headerStyle?: string;
}
export default function GridRow(props: GridRowProps) {
  const {
    header,
    body,
    buttonText,
    imagePath,
    conStyle,
    headerStyle,
    feat = "left",
    href = "#",
    alt = "",
  } = props;

  return (
    <>
      {feat === "left" && (
        <img src={asset(imagePath)} class="h-full" alt={alt} />
      )}
      <div
        class={classnames(
          `bg-deepgreen px-16 py-12 flex items-center w-full justify-center ${conStyle}`
        )}
      >
        <div class="flex flex-col ">
          <h1
            class={classnames(
              `font-bold text-white text-5xl text-center mb-6 font-body ${headerStyle}`
            )}
          >
            {header}
          </h1>
          <p class="text-center font-semibold text-white text-xl">{body}</p>

          <button
            href={href}
            class="border-solid border-white border-1 px-3 py-1 rounded-2xl mt-6 mx-auto text-lg"
          >
            <span class="font-semibold text-white">{buttonText}</span>
          </button>
        </div>
      </div>
      {feat === "right" && (
        <img src={asset(imagePath)} class="h-full" alt={alt} />
      )}
    </>
  );
}
