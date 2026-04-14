"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpeningScreen from "@/components/OpeningScreen";
import Hero from "@/components/Hero";
import Couple from "@/components/Couple";
import Event from "@/components/Event";
import LoveStory from "@/components/LoveStory";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Gift from "@/components/Gift";
import Footer from "@/components/Footer";
import MusicButton from "@/components/MusicButton";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <OpeningScreen key="opening" onOpen={() => setIsOpen(true)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Hero />
            <SectionDivider variant="lotus" />
            <Couple />
            <SectionDivider variant="diamond" />
            <Event />
            <SectionDivider variant="star" />
            <LoveStory />
            <SectionDivider variant="lotus" />
            <Gallery />
            <SectionDivider variant="diamond" />
            <RSVP />
            <SectionDivider variant="star" />
            <Gift />
            <SectionDivider variant="lotus" />
            <Footer />
            <MusicButton />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
            }
