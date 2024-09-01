const HomePage = () => {
  return (
    <main className="relative px-4 space-y-4 md:px-0">
      <div className="flex flex-wrap gap-4 min-h-[40vh] md:min-h-[25vh] items-center justify-between w-full">
        <div>
          <div className="space-y-4">
            <h1 className="text-4xl font-mandai text-secondary">
              Welcome Back, Muhammad!
            </h1>
            <p className="text-neutral-700">
              Continue your journey to get hired and become better developer
              along the way.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="col-span-1 p-4 bg-white border rounded-lg shadow md:col-span-2 md:bg-primary"></div>
        <div className="col-span-1 p-4 bg-white border rounded-lg shadow md:bg-primary"></div>
        <div className="col-span-1 p-4 bg-white border rounded-lg shadow md:bg-primary"></div>
      </div>
    </main>
  );
};

export default HomePage;
