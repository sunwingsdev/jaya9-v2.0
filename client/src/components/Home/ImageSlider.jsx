import { useEffect, useState } from "react";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const ImageSlider = () => {
  const { data: homeControls } = useGetHomeControlsQuery();
  const [currentSliderId, setCurrentSliderId] = useState("");

  // Get selected sliders and sort them if needed
  const sliders = homeControls?.filter(
    (control) => control.category === "slider" && control.isSelected
  );

  // Set initial slider
  useEffect(() => {
    if (sliders && sliders.length > 0 && !currentSliderId) {
      setCurrentSliderId(sliders[0]._id);
    }
  }, [sliders, currentSliderId, setCurrentSliderId]);

  // Auto-rotate sliders
  useEffect(() => {
    if (!sliders || sliders.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSliderId((prevId) => {
        const currentIndex = sliders.findIndex((s) => s._id === prevId);
        const nextIndex = (currentIndex + 1) % sliders.length;
        return sliders[nextIndex]._id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [sliders]);

  if (!sliders || sliders.length === 0) {
    return null;
  }

  const currentSlider =
    sliders.find((s) => s._id === currentSliderId) || sliders[0];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full grid lg:grid-cols-1">
        {/* Mobile image */}
        <img
          src={`${import.meta.env.VITE_BASE_API_URL}${currentSlider.image}`}
          alt="Slider content"
          className="w-full h-32 lg:hidden flex md:h-auto"
        />

        {/* Desktop image */}
        <img
          src={`${import.meta.env.VITE_BASE_API_URL}${currentSlider.image}`}
          alt="Slider content"
          className="w-full max-h-[450px] hidden lg:flex"
        />

        {/* Navigation dots */}
        <div className="absolute bottom-0 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          {sliders.map((slider) => (
            <button
              key={slider._id}
              onClick={() => setCurrentSliderId(slider._id)}
              className={`h-1 w-1 lg:w-3 lg:h-3 rounded-full ${
                currentSliderId === slider._id ? "bg-common-orange" : "bg-white"
              }`}
              aria-label={`Go to slide ${slider._id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
