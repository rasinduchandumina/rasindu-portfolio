type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

export default function Section({ id, children }: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24"
    >
      {children}
    </section>
  );
}