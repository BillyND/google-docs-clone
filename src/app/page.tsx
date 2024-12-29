"use client";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const Home = () => {
  const router = useRouter(); // Initialize the router

  return (
    <div className="flex min-h-screen align-middle justify-center bg-red-400">
      <div className="flex gap-4">
        <Button onClick={() => router.push("/documents")}>Documents</Button>
        <Button onClick={() => router.push("/documents/1")}>Document 1</Button>
      </div>
    </div>
  );
};

export default Home;
