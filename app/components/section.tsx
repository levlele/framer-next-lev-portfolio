type SectionProps = {
  bgColor?: string;
  children?: React.ReactNode;
  className?: string;
  id: string;
};

export default function Section({
  bgColor,
  children,
  className,
  id,
}: SectionProps) {
  return (
    <section id={id} className={`w-full h-screen ${bgColor} ${className}`}>
      {children}
    </section>
  );
}
