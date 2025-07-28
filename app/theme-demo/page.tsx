"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function ThemeDemo() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Theme Demo</h1>
            <p className="text-muted-foreground mt-2">
              Kiểm tra theme đã được cấu hình theo hướng dẫn shadcn/ui
            </p>
          </div>
          <ThemeToggle />
        </div>

        <Separator />

        {/* Color Palette */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="w-full h-16 bg-background border rounded mb-2"></div>
                <p className="text-sm font-medium">Background</p>
                <p className="text-xs text-muted-foreground">bg-background</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="w-full h-16 bg-primary rounded mb-2"></div>
                <p className="text-sm font-medium">Primary</p>
                <p className="text-xs text-muted-foreground">bg-primary</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="w-full h-16 bg-secondary rounded mb-2"></div>
                <p className="text-sm font-medium">Secondary</p>
                <p className="text-xs text-muted-foreground">bg-secondary</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="w-full h-16 bg-accent rounded mb-2"></div>
                <p className="text-sm font-medium">Accent</p>
                <p className="text-xs text-muted-foreground">bg-accent</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="w-full h-16 bg-muted rounded mb-2"></div>
                <p className="text-sm font-medium">Muted</p>
                <p className="text-xs text-muted-foreground">bg-muted</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="w-full h-16 bg-destructive rounded mb-2"></div>
                <p className="text-sm font-medium">Destructive</p>
                <p className="text-xs text-muted-foreground">bg-destructive</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="w-full h-16 bg-card border rounded mb-2"></div>
                <p className="text-sm font-medium">Card</p>
                <p className="text-xs text-muted-foreground">bg-card</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="w-full h-16 bg-popover border rounded mb-2"></div>
                <p className="text-sm font-medium">Popover</p>
                <p className="text-xs text-muted-foreground">bg-popover</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator />

        {/* Components */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Components</h2>
          
          {/* Buttons */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Buttons</h3>
            <div className="flex flex-wrap gap-2">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="destructive">Destructive Button</Button>
            </div>
          </div>

          {/* Badges */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Badges</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Default Badge</Badge>
              <Badge variant="secondary">Secondary Badge</Badge>
              <Badge variant="outline">Outline Badge</Badge>
              <Badge variant="destructive">Destructive Badge</Badge>
            </div>
          </div>

          {/* Form Elements */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Form Elements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter password" />
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>
                    This is a card description that shows how text looks in cards.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Card content goes here. This demonstrates the card component
                    with proper theming applied.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-muted">
                <CardHeader>
                  <CardTitle>Muted Card</CardTitle>
                  <CardDescription>
                    This card uses the muted background color.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Content in a muted card background.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Separator />

        {/* Typography */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Typography</h2>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">Heading 1</h1>
            <h2 className="text-3xl font-semibold text-foreground">Heading 2</h2>
            <h3 className="text-2xl font-medium text-foreground">Heading 3</h3>
            <h4 className="text-xl font-medium text-foreground">Heading 4</h4>
            <p className="text-foreground">Regular paragraph text with foreground color.</p>
            <p className="text-muted-foreground">Muted text for less important information.</p>
            <p className="text-sm text-muted-foreground">Small muted text for captions and descriptions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}