import { JSX } from "https://esm.sh/v94/preact@10.10.6/jsx-runtime/src/index.d.ts";

interface HeaderProps {
  title?: string;
  slug: string;
  description: string;
  children?: JSX.Element | JSX.Element[];
}
export default function SeoHeader(props: HeaderProps) {
  const { title, slug, description } = props;

  return (
    <head>
      <title>Starbux Coffee Company</title>
      <link rel="icon" href="/bux_icon.ico" sizes="32x32" />

      <meta content={description} name="description" />

      <meta property="og:description" content={description} />
      <meta property="og:url" content={slug} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {props.children}
    </head>
  );
}
