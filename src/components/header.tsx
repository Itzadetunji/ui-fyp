import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b h-16 flex items-center px-6">
      <Link
        className="ml-auto flex items-center gap-2"
        href="/profile"
      >
        <Avatar className="h-8 w-8">
          <AvatarImage
            src="/placeholder-user.jpg"
            alt="User"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </Link>
    </header>
  );
}
