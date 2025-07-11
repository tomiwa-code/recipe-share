"use client";
import React from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/lib/ui/Tooltip";
import { Button } from "@/lib/ui/Button";
import { Bookmark, MessageSquareMore, Target } from "lucide-react";
import { Dialog } from "@/lib/ui/Dialog";
import CommentModal from "./CommentModal";
import Link from "next/link";

interface RecipeCardFooterProps {
  recipeId: string;
}

const RecipeCardFooter = ({ recipeId }: RecipeCardFooterProps) => {
  const [openCommentModal, setOpenCommentModal] = React.useState(false);

  return (
    <div className="w-full justify-around md:w-fit flex items-center gap-x-8">
      <CustomTooltip
        icon={<Target className="size-6 text-gray-700" />}
        text="Reviews"
        value={45}
        linkUrl={`/community/${recipeId}`}
      />

      <CustomTooltip
        icon={<MessageSquareMore className="size-6 text-gray-700" />}
        text="Comments"
        value={12}
        onPress={() => setOpenCommentModal(true)}
      />

      <CustomTooltip
        icon={<Bookmark className="size-6 text-gray-700" />}
        text="Save recipe"
        value={5}
      />

      <Dialog open={openCommentModal} onOpenChange={setOpenCommentModal}>
        <CommentModal onClose={() => setOpenCommentModal(false)} />
      </Dialog>
    </div>
  );
};

export default RecipeCardFooter;

type CustomTooltipType = {
  icon: React.ReactNode;
  text: string;
  value: number;
  onPress?: () => void;
  linkUrl?: string;
};

const CustomTooltip = ({
  icon,
  text,
  value,
  linkUrl,
  onPress,
}: CustomTooltipType) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {onPress ? (
          <Button
            variant={"ghost"}
            size={"icon"}
            className="gap-x-1.5"
            onClick={onPress}
          >
            {icon}
            <span className="text-gray-700">{value}</span>
          </Button>
        ) : !onPress && linkUrl ? (
          <Link href={linkUrl}>
            <Button variant={"ghost"} size={"icon"} className="gap-x-1.5">
              {icon}
              <span className="text-gray-700">{value}</span>
            </Button>
          </Link>
        ) : (
          <Button variant={"ghost"} size={"icon"} className="gap-x-1.5">
            {icon}
            <span className="text-gray-700">{value}</span>
          </Button>
        )}
      </TooltipTrigger>
      <TooltipContent>
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  );
};
