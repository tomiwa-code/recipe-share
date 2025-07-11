"use client";
import React from "react";

import {
  DialogContent,
  DialogDescription,
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
    <DialogContent className="bg-white border-none">
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

        <form className="flex flex-col gap-y-4 mt-2">
          <div className="flex items-start space-x-3">
            <Avatar className="size-10 bg-foreground">
              <AvatarImage src={images.avatar_4.src} />
              <AvatarFallback className="bg-sage-100 text-sage-700">
                {getInitials("Jane Doe")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-4">
              {/* Rating */}
              <div className="space-y-2">
                <label className="text-sm text-gray-500">Rating *</label>
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
                  className="border-gray-400"
                />
              </div>

              {/* Comment */}
              <div className="space-y-2">
                <Label className="text-sm font-normal text-gray-500">
                  Review *
                </Label>
                <Textarea
                  placeholder="What did you think of this recipe? How did it turn out?"
                  className="min-h-24 border-gray-400 focus:border-terracotta-500 resize-none"
                  rows={4}
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4">
                <p className="text-xs text-sage-500">* Required fields</p>
                <div className="flex space-x-2">
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
            </div>
          </div>
        </form>
      </DialogHeader>
    </DialogContent>
  );
};

export default CommentModal;
