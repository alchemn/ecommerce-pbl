import { Link } from 'react-router-dom';
import Button from './Button';

const Hero = () => (
  <div className="@container">
    <div className="p-0">
      <div
        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-start justify-center p-12 md:p-16 shadow-lg"
        style={{
          backgroundImage:
            'linear-gradient(75deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTUmLg2ihsQgOyfNUKntX04JUU8mUIoidbN_SV_LHYPlf3rGN4CMdPy-yZaxuPXeXxAeVeePmS0yb3S4GMgGQY6FZ_fGZhLwX1lkahsZoFpijUcRJ7LpR1iT83K94XBUfxTTuIIfe2N0lEKpTCWttmNTZZwHiErxKWnPAYfo6EwbDL9tLoSCddk94ynoVe8ep2nM3b_KaTsEES6XQuFF98nLk0ByvcDxXUKw315wcM0iPqGXAn203F7k11c7mlBF__wcdYGXaqOeMD")',
        }}
      >
        <div className="flex flex-col gap-4 text-left max-w-xl">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl">
            Discover Your Next Favorite Thing
          </h1>
          <h2 className="text-gray-200 text-lg font-normal leading-relaxed md:text-xl">
            Explore a world of curated products, from stylish furniture to the latest gadgets.
          </h2>
        </div>
        <Link to="/product-list">
        <Button>All Products</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Hero;
