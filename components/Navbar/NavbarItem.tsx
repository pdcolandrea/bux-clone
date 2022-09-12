interface NavbarItemProps {
  title: string;
}
export default function NavbarItem(props: NavbarItemProps) {
  const { title } = props;
  return (
    <ul class="pr-5 cursor-pointer">
      <a class="font-bold text-sbbrown hover:text-sbgreenalt">{title}</a>
    </ul>
  );
}
