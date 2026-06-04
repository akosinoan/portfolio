import { useState } from "react";

// Image that shows a spinner placeholder until its source finishes loading,
// then fades the image in. Renders its own positioned wrapper so it can drop
// into any layout — size/shape it via `wrapperClassName`.
//
//   wrapperClassName     sizing + shape of the box (e.g. "h-full w-full", "w-20 h-20 rounded-full")
//   className            applied to the <img> itself (object-fit, rounding, hover fx)
//   spinnerClassName     size/thickness of the spinner ring
//   placeholderClassName background shown behind the spinner while loading
const ImageWithLoader = ({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  spinnerClassName = "h-8 w-8 border-2",
  placeholderClassName = "bg-gray-100",
  onError,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <span className={`relative block overflow-hidden ${wrapperClassName}`}>
      {!loaded && !errored && (
        <span
          className={`absolute inset-0 flex items-center justify-center ${placeholderClassName}`}
        >
          <span
            className={`animate-spin rounded-full border-gray-300 border-t-red-500 ${spinnerClassName}`}
          />
        </span>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          setErrored(true);
          onError?.(e);
        }}
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...rest}
      />
    </span>
  );
};

export default ImageWithLoader;
