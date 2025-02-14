import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TeamMember } from "@/types/team";

interface TeamMemberCardProps {
  member: TeamMember;
  onClick: (member: TeamMember) => void;
  showBioInCard?: boolean;
}

export const TeamMemberCard = ({ member, onClick, showBioInCard = false }: TeamMemberCardProps) => {
  return (
    <Card 
      className={`h-full ${!showBioInCard ? "cursor-pointer hover:shadow-lg transition-shadow duration-200" : ""}`}
      onClick={() => !showBioInCard && onClick(member)}
    >
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex flex-col items-center flex-grow">
          <Avatar className="w-32 h-32 mb-4">
            <AvatarImage 
              src={member.image} 
              alt={member.fullName}
              className={`object-cover ${member.name === "Maddie" || member.name === "Petra" ? "scale-105" : ""}`}
              width={128}
              height={128}
              loading="eager"
              fetchPriority="high"
            />
            <AvatarFallback>{member.name[0]}</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-lg text-center">{member.fullName}</h3>
          <p className="text-sm text-gray-600 text-center">{member.position}</p>
          {showBioInCard && member.bio && (
            <div 
              className="mt-2 text-sm text-gray-600 text-center"
              dangerouslySetInnerHTML={{ __html: member.bio }}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};