import React from "react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Smartphone, Users, Zap } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step = ({
  number = 1,
  title = "Step Title",
  description = "Step description goes here",
  icon,
}: StepProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

interface ConnectorProps {
  className?: string;
}

const Connector = ({ className }: ConnectorProps) => {
  return (
    <div
      className={cn(
        "hidden md:flex items-center justify-center flex-1 px-4",
        className,
      )}
    >
      <ArrowRight className="text-muted-foreground w-8 h-8" />
    </div>
  );
};

interface HowItWorksSectionProps {
  title?: string;
  subtitle?: string;
  steps?: StepProps[];
}

const HowItWorksSection = ({
  title = "How It Works",
  subtitle = "Get started with TapBlack in just three simple steps",
  steps = [
    {
      number: 1,
      title: "Order Your Card",
      description:
        "Choose your TapBlack card design and place your order in minutes.",
      icon: <Smartphone className="h-8 w-8" />,
    },
    {
      number: 2,
      title: "Set Up Your Profile",
      description:
        "Add your social links, contact info, and customize your digital presence.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      number: 3,
      title: "Tap & Share",
      description:
        "Simply tap your card on any smartphone to instantly share your digital profile.",
      icon: <Zap className="h-8 w-8" />,
    },
  ],
}: HowItWorksSectionProps) => {
  return (
    <section className="py-20 px-4 bg-background" id="how-it-works">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-none shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <Step
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                  />
                  {index < steps.length - 1 && <Connector />}
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to experience the simplicity of TapBlack?
          </p>
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
