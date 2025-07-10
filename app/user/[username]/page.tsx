import React from "react";
import UserPageWrapper from "./components/UserPageWrapper";
import BackgroundEffect from "@/lib/ui/BackgroundEffect";
import { extractUniqueId } from "@/lib/utils";

interface UserPageProps {
  params: Promise<{ username: string }>;
}

const UserPage = async ({ params }: UserPageProps) => {
  const { username } = await params;

  return (
    <main className="min-h-screen w-full relative overflow-x-hidden">
      <BackgroundEffect />

      <div className="container mx-auto px-4 pb-20 md:px-8 lg:px-16 relative z-10 pt-28 md:pt-32">
        {/* Show a loading state while the user is being fetched */}
        <React.Suspense fallback={<div>Loading...</div>}>
          <UserPageWrapper username={extractUniqueId(username)} />
        </React.Suspense>
      </div>
    </main>
  );
};

export default UserPage;
