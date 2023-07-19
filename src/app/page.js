import Header from "./components/header";
import Banner from "./components/banner";
import SmallCard from "./components/smallCard";
import MediumCard from "./components/mediumCard";
import LargeCard from "./components/largeCard";
import Footer from "./components/footer";
// import ProgressBar from "./components/progress";

async function productList() {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function cardData() {
  const res = await fetch("https://www.jsonkeeper.com/b/VHHT");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const productData = await productList();
  const cartData = await cardData();
  return (
    // <ProgressBar>
      <div>
        {/* header */}
        <Header />
        {/* banner */}
        <Banner />
        {/* main */}
        <main className="max-w-7xl mx-auto px-8 sm:px-16">
          {/* small cards */}
          <section className="pt-6">
            <h2 className="text-3xl font-semibold pb-5">Explore Nearby</h2>
            {/* pull exploreData from a server - API endpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {productData?.map(({ img, distance, location }) => (
                <SmallCard
                  key={img}
                  img={img}
                  distance={distance}
                  location={location}
                ></SmallCard>
              ))}
            </div>
          </section>

          {/* medium cards */}
          <section>
            <h2 className="text-3xl font-semibold py-8">Live Anywhere</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide">
              {cartData?.map(({ img, title }) => (
                <MediumCard key={img} img={img} title={title} />
              ))}
            </div>
          </section>

          {/* large card */}
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb."
            buttonText="Get Inspired"
          />
        </main>

        {/* footer */}
        <Footer />
      </div>
    // </ProgressBar>
  );
}
