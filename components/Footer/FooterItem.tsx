interface FooterItemProps {
  name: string;
  href?: string;
}
export default function FooterItem(props: FooterItemProps) {
  const { name, href = "#" } = props;
  return (
    <ul class="mb-4">
      <a
        href={href}
        class="text-sbpurp font-semibold text-lg hover:text-warmpurp"
      >
        {name}
      </a>
    </ul>
  );
}
