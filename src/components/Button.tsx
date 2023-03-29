import React from "react";

interface PButtonProps {
  children: React.ReactNode;
  className?: string;
}

const defaultClasses = {
  bg: "bg-sky-600",
  hoverBg: "hover:bg-sky-700",
  text: "text-white",
  py: "py-2",
  px: "px-4",
  rounded: "rounded",
};

function parseClasses(customClasses: string | undefined) {
  if (!customClasses) return defaultClasses;

  const customClassesArr = customClasses.split(" ");
  const parsedClasses = { ...defaultClasses };

  for (const customClass of customClassesArr) {
    const key = customClass.split("-")[0];

    if (key in defaultClasses) {
      parsedClasses[key as keyof typeof defaultClasses] = customClass;
    } else {
      parsedClasses[key as keyof typeof defaultClasses] += " " + customClass;
    }
  }

  return parsedClasses;
}

export default function Button({ children, className }: PButtonProps) {
  const classes = parseClasses(className);
  const combinedClasses = Object.values(classes).join(" ");

  return <button className={combinedClasses}>{children}</button>;
}
