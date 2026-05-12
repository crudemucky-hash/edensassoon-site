export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-16 lg:px-24 border-t border-ink/10 bg-cream">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-cormorant italic text-warm-gray text-xl font-normal">
          Eden Sassoon
        </p>
        <p className="font-jost text-sm text-warm-gray tracking-wider">
          © {new Date().getFullYear()} Eden Sassoon. All rights reserved.
        </p>
        <p className="font-jost text-sm text-warm-gray tracking-wider">
          BE LUV.
        </p>
      </div>
    </footer>
  );
}