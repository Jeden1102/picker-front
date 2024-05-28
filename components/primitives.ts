import { tv } from "tailwind-variants";

const color = {
  violet: "from-[#FF1CF7] to-[#b249f8]",
  yellow: "from-[#FF705B] to-[#FFB457]",
  blue: "from-[#5EA2EF] to-[#0072F5]",
  cyan: "from-[#00b7fa] to-[#01cfea]",
  green: "from-[#6FEE8D] to-[#17c964]",
  pink: "from-[#FF72E1] to-[#F54C7A]",
  foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
};

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color,
    size: {
      sm: "text-2xl md:text-3xl lg:text-4xl leading-[3rem]",
      md: "text-4xl md:text-5xl lg:text-6xl leading-[3rem]",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export const gradient = tv({
  base: "bg-clip-text text-transparent bg-gradient-to-b tracking-tight inline font-semibold",
  variants: {
    color,
  },
});

export const gradientBg = tv({
  base: "bg-gradient-to-b",
  variants: {
    color,
  },
});

export const linkHover = tv({
  base: "relative after:bg-[#FF72E1] after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer",
});

export const error = tv({
  base: "text-sm text-red-500 text-left",
});
