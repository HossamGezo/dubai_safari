// Images
import newsLetterImage from "@/images/newsletterimage.jpg";
import NewsLetterForm from "./components/NewsLetterForm";
// Main Component
const NewsLetter = () => {
  return (
    <>
      <section className="news-letter py-20">
        <div className="container mx-auto flex max-md:flex-col max-md:p-2">
          {/* News Letter Image */}
          <div className="news-letter-image relative w-[50%] max-md:w-full rounded-l-xl max-md:rounded-l-none max-md:rounded-t-xl max-md:rounded-tl-xl overflow-hidden">
            <img
              src={newsLetterImage}
              alt="IMAGE"
              className="w-full object-cover"
            />
            <div className="overlay absolute inset-0 bg-black/35"></div>
          </div>
          {/* News Letter Inbox */}
          <div className="news-letter-inbox w-[50%] max-md:w-full bg-[#D7F7E8] rounded-r-xl max-md:rounded-r-none max-md:rounded-b-xl flex flex-col max-md:p-5 md:p-6 lg:p-5 xl:p-9 items-start justify-center gap-9 max-md:gap-5">
            <h2 className="news-letter-title [@media(max-width:344px)]:text-lg sm:text-2xl max-md:text-xl md:text-xl lg:text-3xl xl:text-[40px] font-bold tracking-wide font-jetbrains text-orange-900">
              Your Dubai Itinerary Is Waiting
            </h2>
            <p className="news-letter-desc [@media(max-width:344px)]:text-[12px] max-md:text-sm md:text-[15px] lg:text-lg">
              Recieve a curated 48-hour itinerary featuring the most iconic
              experiences in Dubai, straight to your inbox.
            </p>
            {/* News Letter Inbox Form */}
            <NewsLetterForm/>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
