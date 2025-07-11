"use client";
import React from "react";

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/lib/ui/Dialog";
import { Input } from "@/lib/ui/Input";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/ui/Avatar";
import { getInitials } from "@/lib/utils";
import { Textarea } from "@/lib/ui/Textarea";
import { Button } from "@/lib/ui/Button";
import StarRating from "@/lib/ui/StarRating";
import { ChefHat } from "lucide-react";
import images from "@/constants/images";
import { Label } from "@/lib/ui/Label";

interface CommentModalProps {
  onClose: () => void;
}

const CommentModal = ({ onClose }: CommentModalProps) => {
  const [rating, setRating] = React.useState(0);

  return (
    <DialogContent className="bg-white !border-none outline-none">
      <DialogHeader>
        <DialogTitle>Write a Review</DialogTitle>
        <DialogDescription className="text-sm text-gray-500">
          Write a review for{" "}
          <span className="capitalize text-gray-700 font-medium">
            nigeria jollof rice
          </span>{" "}
          by{" "}
          <span className="flex items-center gap-x-2 capitalize font-medium">
            {" "}
            <ChefHat size={16} />
            <span>maleek berry</span> • <span>nigerian</span>
          </span>
        </DialogDescription>

        <form className="mt-2">
          <div className="flex flex-col md:flex-row items-start space-x-3">
            <Avatar className="size-10 bg-foreground hidden md:block">
              <AvatarImage src={images.avatar_4.src} />
              <AvatarFallback className="bg-sage-100 text-sage-700">
                {getInitials("Jane Doe")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-4">
              {/* Rating */}
              <div className="flex flex-col gap-y-1">
                <label className="text-sm w-fit text-gray-500">Rating *</label>
                <StarRating
                  rating={rating}
                  interactive
                  onRatingChange={setRating}
                  size="lg"
                />
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label className="text-sm font-normal text-gray-500">
                  Review Title
                </Label>
                <Input
                  placeholder="Summarize your experience..."
                  className="border-gray-400 text-sm md:text-base"
                />
              </div>

              {/* Comment */}
              <div className="space-y-2">
                <Label className="text-sm font-normal text-gray-500">
                  Review *
                </Label>
                <Textarea
                  placeholder="What did you think of this recipe? How did it turn out?"
                  className="min-h-24 border-gray-400 focus:border-terracotta-500 resize-none text-sm md:text-base"
                  rows={4}
                />
              </div>
            </div>
          </div>
        </form>
      </DialogHeader>

      {/* Actions */}
      <DialogFooter>
        <div className="flex items-center gap-y-2 flex-col md:flex-row w-full justify-between md:pt-4">
          <p className="text-xs font-medium w-full text-gray-500">* Required fields</p>

          <div className="flex gap-x-2 w-full justify-end">
            <Button
              type="button"
              variant="outline"
              className="bg-transparent"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white"
            >
              Post Review
            </Button>
          </div>
        </div>
      </DialogFooter>
    </DialogContent>
  );
};

export default CommentModal;
