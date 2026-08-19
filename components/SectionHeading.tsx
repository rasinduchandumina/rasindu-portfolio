type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}