import { useEffect, useState } from "react";

export function useIsMobileTablet() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}


// --advacne
// import { useEffect, useState } from "react";

// export function useIsMobileTablet() {
//   const [device, setDevice] = useState({
//     isMobile: false,
//     isTablet: false,
//   });

//   useEffect(() => {
//     const checkDevice = () => {
//       const width = window.innerWidth;

//       setDevice({
//         isMobile: width < 640,
//         isTablet: width >= 640 && width < 768,
//       });
//     };

//     checkDevice();
//     window.addEventListener("resize", checkDevice);

//     return () => window.removeEventListener("resize", checkDevice);
//   }, []);

//   return device;
// }
