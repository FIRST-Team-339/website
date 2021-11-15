const buttons = [
  { name: "Invite", href: "/invite" },
  { name: "Privacy", href: "/privacy" },
  { name: "Support", href: "/support" },
  { name: "Docs", href: "https://docs.tyra.digital" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-gray-800 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative flex items-center justify-between h-16 w-screen"></div>
  );
}
