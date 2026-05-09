export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-16 lg:px-24 border-t border-white/8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-cormorant italic text-stone text-lg font-light">
          Eden Sassoon
        </p>
        <p className="font-jost text-xs text-stone/40 tracking-wider">
          © {new Date().getFullYear()} Eden Sassoon. All rights reserved.
        </p>
        <p className="font-jost text-xs text-stone/30 tracking-wider">
          BE LUV.
        </p>
      </div>
    </footer>
  );
}
