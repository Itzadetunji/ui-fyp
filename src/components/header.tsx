import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="bg-white border-b h-16 flex items-center px-6">
      <div className="ml-auto flex items-center gap-2">
        <span className="text-sm font-medium">John Doe</span>
        <Avatar className="h-8 w-8">
          <AvatarImage
            src="/placeholder-user.jpg"
            alt="John Doe"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
