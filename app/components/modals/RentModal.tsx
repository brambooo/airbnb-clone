"use client";

import React from "react";
import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";

export const RentModal = () => {
  const rentModal = useRentModal();
  return (
    <Modal
      title="Airbnb your home!"
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={() => {}}
      actionLabel="Submit"
    />
  );
};
