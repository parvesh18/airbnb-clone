import InfoCard from "../components/InfoCard";
import Footer from "../components/footer";
import Header from "../components/header";
import { format } from "date-fns";

async function searchResults() {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function page(params) {
  const searchData = await searchResults();
  const { location, startDate, endDate, noOfGuests } = params.searchParams;

  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>

          <p className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </p>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms & Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchData.map(
              ({ img, location, title, description, star, price, total },index) => {
                return (
                  <InfoCard
                    key={img}
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                    index={index}
                  />
                );
              }
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
