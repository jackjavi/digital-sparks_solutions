import React from "react";
import CheckoutComponent from "./CheckoutComponentStripe";

interface ServiceCTAProps {
  priceId: string;
  quantity: number;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({ priceId, quantity }) => {
  return (
    <div className="inline-block">
      <CheckoutComponent priceId={priceId} quantity={quantity} />
    </div>
  );
};

export default ServiceCTA;
