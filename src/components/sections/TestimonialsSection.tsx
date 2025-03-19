"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Star, Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating?: number;
  avatarUrl?: string;
}

const Testimonial = ({
  quote = "This is a testimonial quote.",
  author = "John Doe",
  role = "CEO, Company",
  rating = 5,
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
}: TestimonialProps) => {
  return (
    <Card className="h-full bg-secondary/30 border border-primary/20 shadow-lg overflow-hidden">
      <CardContent className="p-8 relative">
        <div className="absolute top-4 right-4 text-accent/40">
          <Quote size={40} />
        </div>

        <div className="flex space-x-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "text-accent fill-accent" : "text-muted"}
            />
          ))}
        </div>

        <p className="text-foreground mb-6 relative z-10">"{quote}"</p>

        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/30">
            <img
              src={avatarUrl}
              alt={`${author} avatar`}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{author}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialProps[];
}

const TestimonialsSection = ({
  title = "What Our Customers Say",
  subtitle = "Join thousands of professionals who've transformed their networking experience",
  testimonials = [
    {
      quote:
        "TapBlack has completely transformed how I network at events. No more fumbling for business cards or typing contact info into phones. Just a simple tap and I'm connected!",
      author: "Sarah Johnson",
      role: "Marketing Director",
      rating: 5,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      quote:
        "As someone who attends multiple conferences a month, TapBlack has been a game-changer. The analytics feature helps me track which connections are most engaged with my content.",
      author: "Michael Chen",
      role: "Tech Entrepreneur",
      rating: 5,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      quote:
        "The sleek design of my TapBlack card always gets compliments. It's not just functional, it's a conversation starter that reflects my personal brand perfectly.",
      author: "Emma Rodriguez",
      role: "Creative Director",
      rating: 4,
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
  ],
}: TestimonialsSectionProps) => {
  return (
    <section className="py-20 px-4 bg-background" id="testimonials">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Testimonial
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
                avatarUrl={testimonial.avatarUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
