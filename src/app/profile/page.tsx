"use client";

import ProfileHeader from "@/components/profile-header";
import RecommendedProducts from "@/components/recommended-products";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import ProfileProductGrid from "@/components/profile-product-grid";
import { SetStateAction, useState } from "react";

const ProfilePage = () => {
  const [selectedUser, setSelectedUser] = useState(
    "AGKHLEW2SOWHNMFQIJGBECAF7INQ"
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <ProfileHeader
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>
            <ProfileProductGrid selectedUser={selectedUser} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
