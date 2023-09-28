import { currentProfile } from "@/lib/current-profile";
import { redirectToSignIn } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { ChatHeader } from "@/components/chat/chat-header";

interface MemberIdPageProps {
  params: {
    serverId: string;
    channelId: string;
  }
}

const MemberIdPage = async({
  params
}: MemberIdPageProps) => {
  
  <div></div>
}
 
export default MemberIdPage;