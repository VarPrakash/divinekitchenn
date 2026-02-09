"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ReservationModal from "./ReservationModal";
import N8nChat from "./N8nChat";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <>
      <Navbar onReservationClick={() => setReservationOpen(true)} />
      <main className="pt-[72px]">{children}</main>
      <Footer />
      <ReservationModal
        open={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
      <N8nChat />
    </>
  );
}
