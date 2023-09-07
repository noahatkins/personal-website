"use client";
import {useRouter} from "next/navigation";
import React, {useEffect} from "react";

export const Page = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/about");
    }, 4000);
  }, []);

  return (
    <div className="flex h-screen w-full justify-center items-center p-5">
      <svg id="logo" width="1025" height="125" viewBox="0 0 1025 125" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M92.68 117.96H78.12L19.56 29.16V117.96H5V6.28001H19.56L78.12 94.92V6.28001H92.68V117.96Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M168.06 119.08C157.713 119.08 148.273 116.68 139.74 111.88C131.207 106.973 124.433 100.2 119.42 91.56C114.513 82.8133 112.06 73 112.06 62.12C112.06 51.24 114.513 41.48 119.42 32.84C124.433 24.0933 131.207 17.32 139.74 12.52C148.273 7.61334 157.713 5.16 168.06 5.16C178.513 5.16 188.007 7.61334 196.54 12.52C205.073 17.32 211.793 24.04 216.7 32.68C221.607 41.32 224.06 51.1333 224.06 62.12C224.06 73.1067 221.607 82.92 216.7 91.56C211.793 100.2 205.073 106.973 196.54 111.88C188.007 116.68 178.513 119.08 168.06 119.08ZM168.06 106.44C175.847 106.44 182.833 104.627 189.02 101C195.313 97.3733 200.22 92.2 203.74 85.48C207.367 78.76 209.18 70.9733 209.18 62.12C209.18 53.16 207.367 45.3733 203.74 38.76C200.22 32.04 195.367 26.8667 189.18 23.24C182.993 19.6133 175.953 17.8 168.06 17.8C160.167 17.8 153.127 19.6133 146.94 23.24C140.753 26.8667 135.847 32.04 132.22 38.76C128.7 45.3733 126.94 53.16 126.94 62.12C126.94 70.9733 128.7 78.76 132.22 85.48C135.847 92.2 140.753 97.3733 146.94 101C153.233 104.627 160.273 106.44 168.06 106.44Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M309.201 93.16H260.561L251.601 117.96H236.241L276.561 7.08H293.361L333.521 117.96H318.161L309.201 93.16ZM305.041 81.32L284.881 25L264.721 81.32H305.041Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M437.014 6.44V117.96H422.454V67.4H365.654V117.96H351.094V6.44H365.654V55.4H422.454V6.44H437.014Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M570.451 93.16H521.811L512.851 117.96H497.491L537.811 7.08H554.611L594.771 117.96H579.411L570.451 93.16ZM566.291 81.32L546.131 25L525.971 81.32H566.291Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M680.984 6.44V18.28H650.584V117.96H636.024V18.28H605.464V6.44H680.984Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M759.386 117.96L713.466 67.08V117.96H698.906V6.44H713.466V58.12L759.546 6.44H777.946L727.386 62.28L778.426 117.96H759.386Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <path d="M809.247 6.44V117.96H794.688V6.44H809.247Z" stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)" />
        <path
          d="M921.742 117.96H907.182L848.622 29.16V117.96H834.062V6.28001H848.622L907.182 94.92V6.28001H921.742V117.96Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M981.922 119.08C974.562 119.08 967.949 117.8 962.083 115.24C956.323 112.573 951.789 108.947 948.482 104.36C945.176 99.6667 943.469 94.28 943.362 88.2H958.883C959.416 93.4267 961.549 97.8533 965.282 101.48C969.122 105 974.669 106.76 981.922 106.76C988.856 106.76 994.296 105.053 998.242 101.64C1002.3 98.12 1004.32 93.64 1004.32 88.2C1004.32 83.9333 1003.15 80.4667 1000.8 77.8C998.456 75.1333 995.523 73.1067 992.003 71.72C988.483 70.3333 983.736 68.84 977.763 67.24C970.403 65.32 964.483 63.4 960.003 61.48C955.629 59.56 951.843 56.5733 948.643 52.52C945.549 48.36 944.003 42.8133 944.003 35.88C944.003 29.8 945.549 24.4133 948.643 19.72C951.736 15.0267 956.056 11.4 961.602 8.84C967.256 6.28 973.709 5 980.963 5C991.416 5 999.949 7.61333 1006.56 12.84C1013.28 18.0667 1017.07 25 1017.92 33.64H1001.92C1001.39 29.3733 999.149 25.64 995.203 22.44C991.256 19.1333 986.029 17.48 979.523 17.48C973.443 17.48 968.483 19.08 964.643 22.28C960.803 25.3733 958.883 29.7467 958.883 35.4C958.883 39.4533 960.002 42.76 962.242 45.32C964.589 47.88 967.416 49.8533 970.722 51.24C974.136 52.52 978.882 54.0133 984.962 55.72C992.322 57.7467 998.242 59.7733 1002.72 61.8C1007.2 63.72 1011.04 66.76 1014.24 70.92C1017.44 74.9733 1019.04 80.52 1019.04 87.56C1019.04 93 1017.6 98.12 1014.72 102.92C1011.84 107.72 1007.58 111.613 1001.92 114.6C996.269 117.587 989.602 119.08 981.922 119.08Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
      </svg>
    </div>
  );
};