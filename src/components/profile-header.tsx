"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Calendar } from "lucide-react";

const users = [
  {
    id: "AGKHLEW2SOWHNMFQIJGBECAF7INQ",
    name: "User 1",
    email: "user1@email.com",
    location: "New York, NY",
    memberSince: "2023",
    initials: "U1",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "AFQLNQNQYFWQZPJQZS6V3NZU4QBQ",
    name: "User 2",
    email: "user2@email.com",
    location: "Los Angeles, CA",
    memberSince: "2022",
    initials: "U2",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "AFSKPY37N3C43SOI5IEXEK5JSIYA",
    name: "User 3",
    email: "user3@email.com",
    location: "Chicago, IL",
    memberSince: "2024",
    initials: "U3",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "AFZUK3MTBIBEDQOPAK3OATUOUKLA",
    name: "User 4",
    email: "user4@email.com",
    location: "Miami, FL",
    memberSince: "2021",
    initials: "U4",
    avatar: "/placeholder-user.jpg",
  },
];

const ProfileHeader: React.FC<{
  selectedUser: string;
  setSelectedUser: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  const currentUser =
    users.find((user) => user.id === props.selectedUser) || users[0];

  return (
    <div className="space-y-6">
      {/* User Selection Grid */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Select User</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => props.setSelectedUser(user.id)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                  props.selectedUser === user.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="text-center">
                  <div className="text-sm font-medium">{user.name}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Selected User Profile */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={currentUser.avatar || "/placeholder.svg"}
                alt={currentUser.name}
              />
              <AvatarFallback className="text-2xl">
                {currentUser.initials}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h1 className="text-3xl font-bold">{currentUser.name}</h1>
                <Badge
                  variant="secondary"
                  className="w-fit"
                >
                  Premium Member
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{currentUser.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{currentUser.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Member since {currentUser.memberSince}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileHeader;
