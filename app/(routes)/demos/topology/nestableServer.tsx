import Border from "#/components/border";

import FancyServer from "./fancyServer";

export default function NestableServer({
  children,
  header,
}: {
  children?: React.ReactNode;
  header?: React.ReactNode;
}) {
  return (
    <Border name="NestableServer">
      {!!header && (
        <div className="border-2 border-dotted border-gray-500">
          <div className="pb-4 text-sm">nestableServer header</div>
          {header}
        </div>
      )}
      <FancyServer />
      {children}
    </Border>
  );
}
