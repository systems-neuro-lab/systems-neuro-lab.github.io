import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TeamMember } from "@/types/team";

interface TeamMemberDialogProps {
  member: TeamMember | null;
  onClose: () => void;
}

export const TeamMemberDialog = ({ member, onClose }: TeamMemberDialogProps) => {
  if (!member) return null;

  return (
    <Dialog open={!!member} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{member.fullName}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4">
          <Avatar className="w-32 h-32">
            <AvatarImage 
              src={member.image} 
              alt={member.fullName}
              className={`object-cover ${member.name === "Maddie" || member.name === "Petra" ? "scale-105" : ""}`}
              width={128}
              height={128}
              loading="lazy"
            />
            <AvatarFallback>{member.name[0]}</AvatarFallback>
          </Avatar>
          <div className="text-center w-full">
            <p className="font-medium text-lg mb-2">{member.position}</p>
            <p className="text-gray-600 mb-4 whitespace-pre-wrap text-left">{member.bio}</p>
            {member.email && (
              <p className="text-sm text-gray-500 mt-4 pt-4 border-t">
                Contact: {member.email}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};