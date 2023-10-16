import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const VendingPage = () => {
  return (
    <div>
      <Button>
        <Link href="/vending/new">New Vending</Link>
      </Button>
    </div>
  );
};

export default VendingPage;
