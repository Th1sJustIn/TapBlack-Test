import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, DollarSign, BarChart3, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card
        className={cn(
          "h-full bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300",
          className,
        )}
      >
        <CardHeader>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
            {icon}
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface FeaturesSectionProps {
  className?: string;
  features?: {
    icon: keyof typeof iconComponents;
    title: string;
    description: string;
  }[];
}

const iconComponents = {
  Zap: <Zap className="w-6 h-6" />,
  DollarSign: <DollarSign className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
};

const FeaturesSection = ({
  className,
  features = [
    {
      icon: "Zap",
      title: "Instant Link Sharing",
      description:
        "Share all your important links with a simple tap. No apps to download, no complicated setup.",
    },
    {
      icon: "DollarSign",
      title: "Affordable Solution",
      description:
        "Get your professional TapBlack card at a fraction of the cost of other digital business cards.",
    },
    {
      icon: "BarChart3",
      title: "Track Your Connections",
      description:
        "Monitor how many people view your profile and which links get the most engagement.",
    },
    {
      icon: "Users",
      title: "Perfect for Professionals",
      description:
        "Ideal for entrepreneurs, salespeople, networkers, and anyone who values making meaningful connections.",
    },
  ],
}: FeaturesSectionProps) => {
  return (
    <section className={cn("py-20 px-4 md:px-8 bg-background", className)}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose TapBlack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our digital cards make networking effortless with cutting-edge NFC
            technology and sleek design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={iconComponents[feature.icon]}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
