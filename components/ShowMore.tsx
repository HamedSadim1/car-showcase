"use client";

import { useCallback } from "react";
import { ShowMoreProps } from "@/types";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { CustomButton } from "@/components";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const { updateSearchParams } = useUpdateSearchParams();

  const handleNavigation = useCallback(() => {
    const newLimit = (pageNumber + 1) * 10;
    updateSearchParams("limit", `${newLimit}`);
  }, [pageNumber, updateSearchParams]);

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
