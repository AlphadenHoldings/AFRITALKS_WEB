import { Testimonial } from "@/json/testimonial";
import { useTranslation } from "react-i18next";

export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full h-fit mb-4">
      <div className="w-[22rem] bg-[#FFFFFF] shadow-[#00000008] drop-shadow-sm rounded-xl flex flex-col py-5 px-6">
        <h1 className="text-[0.9rem] text-[#000000] font-inter font-normal">
          {testimonial.remark}
        </h1>
        <h3 className="mt-3 text-[#122231] text-[1rem] font-[500] font-inter">
          {testimonial.name}
        </h3>
        {testimonial.location && (
          <h5 className="text-[#12223199] text-[0.8rem] font-inter font-normal">
            {testimonial.location}
          </h5>
        )}
      </div>
    </div>
  );
};