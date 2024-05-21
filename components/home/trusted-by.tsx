import { SiMicrosoftazure } from "react-icons/si";
import { FaAmazon, FaSpotify, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandVercel } from "react-icons/tb";

function TrustedBy() {
  return (
    <div className="mx-auto mb-16 md:mb-24 max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-lg leading-8">
        Trusted by the world’s most innovative teams
      </h2>
      <div className="mx-auto mt-10 flex justify-between max-w-lg items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <SiMicrosoftazure size={48} />
        <FaAmazon size={48} />
        <FaSpotify size={48} />
        <FaGoogle size={48} />
        <FaXTwitter size={48} />
        <TbBrandVercel size={48} />
      </div>
    </div>
  );
}

export default TrustedBy;
