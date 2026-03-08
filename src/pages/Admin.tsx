import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Users, Code, FileText } from "lucide-react";

const PASS = "@Malaga73";

const teamSections = [
  {
    name: "Lucio",
    icon: <Users className="w-5 h-5 text-primary" />,
    instructions: [
      "Hi Lucio,",
      "Here you can find the prompt to use for Lovable.",
      "In case you want to add an image, add this at the end of the long prompt below:",
      "\"use the image inserted and add alt descriptor in all the different languages, ensure that the SEO is correct\"",
      "",
      "— PROMPT TO COPY —",
      "",
      "Add a new blog post to the website.",
      "Do not change any existing design, layout, or code.",
      "",
      "Title: [WRITE THE TITLE HERE]",
      "Author: [WRITE THE AUTHOR NAME HERE]",
      "Date: [WRITE THE DATE HERE, e.g. 8 March 2025]",
      "",
      "Introduction: [WRITE THE INTRODUCTION PARAGRAPH HERE]",
      "",
      "Section 1 — [SECTION 1 TITLE]: [SECTION 1 TEXT]",
      "",
      "Section 2 — [SECTION 2 TITLE]: [SECTION 2 TEXT]",
      "",
      "Section 3 — [SECTION 3 TITLE]: [SECTION 3 TEXT]",
      "",
      "Closing paragraph: [WRITE THE CLOSING PARAGRAPH HERE]",
      "",
      "Publish the article at these three URLs:",
      "/it/blog/[nome-articolo-in-italiano]",
      "/en/blog/[article-name-in-english]",
      "/es/blog/[nombre-articulo-en-espanol]",
      "",
      "Each page contains the full article translated in its respective language, showing title, author, and date.",
    ],
  },
  {
    name: "Valeria",
    icon: <Users className="w-5 h-5 text-primary" />,
    instructions: [
      "Welcome Valeria! Here are your responsibilities.",
      "— Manage community events and member communications.",
      "— Handle new membership onboarding process.",
      "— Coordinate meeting room bookings and conflicts.",
      "— Prepare monthly community newsletter content.",
    ],
  },
  {
    name: "For Developers",
    icon: <Code className="w-5 h-5 text-primary" />,
    instructions: [
      "Note tecniche sul progetto.",
      "— Il sito è stato realizzato interamente con Lovable SPA (Single Page Application).",
      "— Tutte le risorse sono pubblicate su GitHub in una repository privata.",
      "— Nessun accesso backend è stato eseguito.",
      "— All pages follow the ServicePageLayout pattern.",
      "— Images are stored in src/assets/.",
      "— Routes are defined in src/App.tsx.",
      "— Use semantic design tokens from index.css — never hardcode colors.",
      "— Navbar links are managed in src/components/landing/Navbar.tsx.",
      "— Footer links are managed in src/components/landing/Footer.tsx.",
    ],
  },
];

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASS) {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-xl font-display">Team Access</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={error ? "border-destructive" : ""}
              />
              {error && (
                <p className="text-destructive text-sm">Incorrect password.</p>
              )}
              <Button type="submit" className="w-full">
                Access
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-7 h-7 text-primary" />
          <h1 className="text-3xl font-display font-bold text-foreground">
            Team Instructions
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          {teamSections.map((section) => (
            <Card key={section.name}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  {section.icon}
                  {section.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-2">
                  {section.instructions.map((line, i) => (
                    <li
                      key={i}
                      className={`text-sm ${
                        i === 0
                          ? "font-medium text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
