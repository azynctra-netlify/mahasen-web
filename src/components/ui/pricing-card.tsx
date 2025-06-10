import * as React from "react"
import { BadgeCheck, ArrowRight } from "lucide-react"
import NumberFlow from "@number-flow/react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GlowEffect } from "@/components/ui/glow-effect"
import { ShineBorder } from "@/components/ui/shine-border"

export interface PricingTier {
  name: string
  price: Record<string, number | string>
  description: string
  features: string[]
  cta: string
  ctaUrl?: string
  highlighted?: boolean
  popular?: boolean
}

interface PricingCardProps {
  tier: PricingTier
  paymentFrequency: string
}

export function PricingCard({ tier, paymentFrequency }: PricingCardProps) {
  const price = tier.price[paymentFrequency]
  const isHighlighted = tier.highlighted
  const isPopular = tier.popular
  const isProTier = tier.name.toLowerCase().includes('pro')

  // Helper function to check if URL is external
  const isExternalUrl = (url: string) => {
    return url.startsWith('http') || url.startsWith('mailto:')
  }

  // Render the glow button for Pro tier
  const renderButton = () => {
    const buttonContent = (
      <>
        {tier.cta}
        <ArrowRight className="h-4 w-4" />
      </>
    )

    if (isProTier && tier.cta.toLowerCase().includes('trial')) {
      if (tier.ctaUrl) {
        if (isExternalUrl(tier.ctaUrl)) {
          return (
            <div className="relative w-full">
              <GlowEffect
                colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
                mode="colorShift"
                blur="soft"
                duration={3}
                scale={0.9}
              />
              <a 
                href={tier.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-100"
              >
                {buttonContent}
              </a>
            </div>
          )
        } else {
          return (
            <div className="relative w-full">
              <GlowEffect
                colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
                mode="colorShift"
                blur="soft"
                duration={3}
                scale={0.9}
              />
              <Link 
                to={tier.ctaUrl}
                className="relative w-full inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-100"
              >
                {buttonContent}
              </Link>
            </div>
          )
        }
      }

      return (
        <div className="relative w-full">
          <GlowEffect
            colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
            mode="colorShift"
            blur="soft"
            duration={3}
            scale={0.9}
          />
          <button className="relative w-full inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-100">
            {buttonContent}
          </button>
        </div>
      )
    }

    if (tier.ctaUrl) {
      if (isExternalUrl(tier.ctaUrl)) {
        return (
          <a
            href={tier.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant={isHighlighted ? "secondary" : "default"}
              className="w-full"
            >
              {buttonContent}
            </Button>
          </a>
        )
      } else {
        return (
          <Link to={tier.ctaUrl} className="w-full">
            <Button
              variant={isHighlighted ? "secondary" : "default"}
              className="w-full"
            >
              {buttonContent}
            </Button>
          </Link>
        )
      }
    }

    return (
      <Button
        variant={isHighlighted ? "secondary" : "default"}
        className="w-full"
      >
        {buttonContent}
      </Button>
    )
  }

  const cardContent = (
    <>
      {isHighlighted && <HighlightedBackground />}
      {isPopular && <PopularBackground />}

      <h2 className="flex items-center gap-3 text-xl font-medium capitalize">
        {tier.name}
        {isPopular && (
          <Badge variant="secondary" className="mt-1 z-10">
            🔥 Best Value
          </Badge>
        )}
      </h2>

      <div className="relative h-12">
        {typeof price === "number" ? (
          <>
            <NumberFlow
              format={{
                style: "currency",
                currency: "USD",
              }}
              value={price}
              className="text-4xl font-medium"
            />
            <p className="-mt-2 text-xs text-muted-foreground">
              Per month/user
            </p>
          </>
        ) : (
          <h1 className="text-4xl font-medium">{price}</h1>
        )}
      </div>

      <div className="flex-1 space-y-2">
        <h3 className="text-sm font-medium">{tier.description}</h3>
        <ul className="space-y-2">
          {tier.features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                "flex items-center gap-2 text-sm font-medium",
                isHighlighted ? "text-background" : "text-muted-foreground"
              )}
            >
              <BadgeCheck className="h-4 w-4" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {renderButton()}
    </>
  )

  // Wrap Pro tier in ShineBorder
  if (isProTier) {
    return (
      <ShineBorder
        borderWidth={1}
        borderRadius={10}
        className={cn(
          "relative flex flex-col gap-6 overflow-hidden p-6 pt-0 bg-white/5 shadow-2xl backdrop-blur-md dark:bg-black/5",
          isHighlighted
            ? "bg-foreground text-background"
            : "bg-background text-foreground"
        )}
        color={["#FF007F", "#39FF14", "#00FFFF"]}
      >
        {cardContent}
      </ShineBorder>
    )
  }

  return (
    <Card
      className={cn(
        "relative flex flex-col gap-8 overflow-hidden p-6",
        isHighlighted
          ? "bg-foreground text-background"
          : "bg-background text-foreground",
        isPopular && "ring-2 ring-primary"
      )}
    >
      {cardContent}
    </Card>
  )
}

const HighlightedBackground = () => (
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
)

const PopularBackground = () => (
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
)