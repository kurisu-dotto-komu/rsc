interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-4 lg:px-6 ${className}`}>
      {children}
    </div>
  );
}
