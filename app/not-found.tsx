import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="not-found-page">
      <section className="not-found-hero">
        <div className="container not-found-layout">
          <div className="not-found-copy">
            <span className="eyebrow"><i /> Route not found</span>
            <strong className="not-found-code">404</strong>
            <h1>This page has checked out.</h1>
            <p>
              The address may have changed, or the page may no longer be available. The NamiOS
              platform is still right where you left it.
            </p>
            <div>
              <Link className="button" href="/">Return home</Link>
              <Link className="button ghost" href="/products">Explore products</Link>
            </div>
          </div>
          <div className="not-found-visual" aria-hidden="true">
            <div className="room-key">
              <span>404</span>
              <strong>ROOM NOT FOUND</strong>
              <small>NamiOS &middot; Front desk</small>
            </div>
            <div className="key-ring" />
            <div className="not-found-note">
              Try another route <span>&rarr;</span>
            </div>
          </div>
        </div>
      </section>
      <section className="not-found-links">
        <div className="container">
          <span>Popular destinations</span>
          <nav aria-label="Popular destinations">
            <Link href="/products">Nami Stay</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
