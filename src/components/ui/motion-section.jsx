export function MotionSection({ id, className = "", children }) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
