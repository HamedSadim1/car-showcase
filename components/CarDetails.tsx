import { memo } from "react";
import Image from "next/image";

import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { CarProps } from "@/types";

import CarMainImage from "./CarMainImage";
import CarThumbnails from "./CarThumbnails";
import CarSpecs from "./CarSpecs";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => (
  <Transition appear show={isOpen}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <TransitionChild
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-out duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
              <button
                type="button"
                className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                onClick={closeModal}
              >
                <Image
                  src="/close.svg"
                  alt="close"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </button>

              <div className="flex-1 flex flex-col gap-3">
                <CarMainImage car={car} />
                <CarThumbnails car={car} />
              </div>

              <CarSpecs car={car} />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </Transition>
);

export default memo(CarDetails);
