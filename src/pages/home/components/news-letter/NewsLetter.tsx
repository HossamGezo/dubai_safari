// Images
import newsLetterImage from "@/images/newsletter-image.jpg";
import NewsLetterForm from "./components/NewsLetterForm";

// Main Component
const NewsLetter = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto flex max-md:flex-col max-md:p-2">
        {/* News Letter Image */}
        <div className="relative w-[50%] max-md:w-full rounded-l-xl max-md:rounded-l-none max-md:rounded-t-md max-md:rounded-tl-md overflow-hidden">
          <img
            src={newsLetterImage}
            alt="Dubai Newsletter Background"
            className="w-full object-cover"
          />
          <div className="overlay absolute inset-0 bg-black/35"></div>
        </div>
        {/* News Letter Inbox */}
        <div className="w-[50%] max-md:w-full bg-[#D7F7E8] rounded-r-xl max-md:rounded-r-none max-md:rounded-b-md flex flex-col max-md:p-5 md:p-6 lg:p-5 xl:p-9 items-start justify-center gap-9 max-md:gap-5">
          <h2 className="[@media(max-width:344px)]:text-lg sm:text-2xl max-md:text-xl md:text-xl lg:text-3xl xl:text-[40px] font-bold tracking-wide font-jetbrains text-orange-900">
            Your Dubai Itinerary Is Waiting
          </h2>
          <p className="[@media(max-width:344px)]:text-[12px] max-md:text-sm md:text-[15px] lg:text-lg">
            Receive a curated 48-hour itinerary featuring the most iconic
            experiences in Dubai, straight to your inbox.
          </p>
          {/* News Letter Inbox Form */}
          <NewsLetterForm />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
