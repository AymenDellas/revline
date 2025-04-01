import React from "react";

const SectionTitle = ({ badge, title }: { badge: string; title: string }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <span className="px-2 py-0.5 bg-revline-50 text-revline-800 text-sm rounded-full w-fit">
        {badge}
      </span>
      <h1 className="text-revline-900 text-5xl font-bold font-itim">{title}</h1>
    </div>
  );
};

export default SectionTitle;
