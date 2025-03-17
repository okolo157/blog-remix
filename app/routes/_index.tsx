import type { MetaFunction } from "@remix-run/node";
import Articles from "./articles";
import Hero from "./hero";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Hero />
      <Articles />
    </div>
  );
}
