function Stats() {
  return (
    <div className="mx-auto mb-16 md:pb-20 max-w-7xl px-6 lg:px-8">
      <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center lg:grid-cols-3">
        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-base leading-7 ">
            Scraping requests every 24 hours
          </dt>
          <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
            44 million
          </dd>
        </div>
        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-base leading-7 ">Pages scraped</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
            +200
          </dd>
        </div>
        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt className="text-base leading-7 ">New users annually</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
            46,000
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default Stats;
