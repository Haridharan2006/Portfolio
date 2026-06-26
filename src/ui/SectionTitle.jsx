function SectionTitle({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mb-20">

      <p className="uppercase tracking-[0.3em] text-sky-400 font-semibold text-sm">

        {eyebrow}

      </p>

      <h2 className="section-title mt-5">

        {title}

      </h2>

      <p className="section-subtitle">

        {description}

      </p>

    </div>
  );
}

export default SectionTitle;