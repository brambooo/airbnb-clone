import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import { EmptyState } from "@/app/components/EmptyState";
import React from "react";
import { ListingClient } from "./ListingClient";

interface IParams {
  listingId?: string;
}

// Onthouden dat we geen hooks in server component kunnen gebruiken, alleen actions die direct communiceren met onze db.
const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  console.log("listing", listing);

  if (!listing) {
    // TODO: Wrap with ClientOnly, alleen nu ff kijken wat er gebeurd zonder.
    return <EmptyState showReset={false} />;
  }

  return (
    <div>
      <ListingClient listing={listing} currentUser={currentUser} />
    </div>
  );
};

export default ListingPage;
