"use client"

import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animation"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  id?: string
}

export default function AnimatedSection({
  children,
  className = "",
  direction = "up",
  delay = 0,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      <motion.div variants={fadeIn(direction, delay)}>{children}</motion.div>
    </motion.section>
  )
}

