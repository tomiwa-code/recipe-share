import images from "./constants/images";
import { ReviewType } from "./types/recipe.type";

export const recipes = [];

export const reviewsArr: ReviewType[] = [
  {
    _id: "1",
    user: {
      _id: "1",
      name: "Sarah Mitchell",
      avatar: images.avatar_4.src,
    },
    rating: 5,
    title: "Absolutely Perfect!",
    comment:
      "This recipe exceeded all my expectations! I made it for a dinner party last weekend and everyone was asking for the recipe. The instructions were so clear and easy to follow. I especially loved the tip about letting the ingredients rest for 10 minutes - it really made a difference in the final texture. Will definitely be making this again soon!",
    createdAt: "2024-07-15T10:30:00Z",
    updatedAt: "2024-07-15T10:30:00Z",
  },
  {
    _id: "2",
    user: {
      _id: "2",
      name: "Mike Rodriguez",
      avatar: images.avatar_2.src,
    },
    rating: 4,
    title: "Great recipe with a small tweak",
    comment:
      "Really enjoyed this recipe! I added a bit more seasoning than suggested as my family likes bold flavors. The cooking time was spot on. Only reason I'm giving 4 stars instead of 5 is that I felt it needed just a touch more salt, but that's totally personal preference.",
    createdAt: "2024-07-15T10:30:00Z",
    updatedAt: "2024-07-15T10:30:00Z",
  },
  {
    _id: "3",
    user: {
      _id: "2",
      name: "Mike Rodriguez",
      avatar: images.avatar_2.src,
    },
    rating: 4,
    title: "Great recipe with a small tweak",
    comment:
      "Really enjoyed this recipe! I added a bit more seasoning than suggested as my family likes bold flavors. The cooking time was spot on. Only reason I'm giving 4 stars instead of 5 is that I felt it needed just a touch more salt, but that's totally personal preference.",
    createdAt: "2024-07-15T10:30:00Z",
    updatedAt: "2024-07-15T10:30:00Z",
  },
  {
    _id: "4",
    user: {
      _id: "3",
      name: "Lisa Kim",
      avatar: images.avatar_5.src,
    },
    rating: 5,
    title: "Family favorite!",
    comment:
      "This has become our go-to recipe for Sunday dinners. Even my picky 8-year-old loves it! I've made it at least 6 times now and it turns out perfect every single time. Thank you for sharing such a wonderful recipe.",
    createdAt: "2024-07-15T10:30:00Z",
    updatedAt: "2024-07-15T10:30:00Z",
  },
  {
    _id: "5",
    user: {
      _id: "4",
      name: "David Chen",
      avatar: images.avatar_2.src,
    },
    rating: 3,
    title: "Good but not amazing",
    comment:
      "The recipe was fine but didn't wow me. Maybe I did something wrong with the preparation. The flavors were good but I was expecting something more based on all the positive reviews.",
    createdAt: "2024-07-15T10:30:00Z",
    updatedAt: "2024-07-15T10:30:00Z",
  },
  {
    _id: "6",
    user: {
      _id: "1",
      name: "John Doe",
      avatar: images.avatar_1.src,
    },
    rating: 5,
    createdAt: "2025-07-09T12:00:00Z",
    comment: "This recipe is amazing!",
    updatedAt: "2025-07-09T12:00:00Z",
  },
  {
    _id: "7",
    user: {
      _id: "2",
      name: "Jane Smith",
      avatar: images.avatar_4.src,
    },
    rating: 4,
    createdAt: "2025-06-29T12:00:00Z",
    comment: "Really enjoyed this dish.",
    updatedAt: "2025-06-29T12:00:00Z",
  },
  {
    _id: "8",
    user: {
      _id: "3",
      name: "Bob Johnson",
      avatar: images.avatar_3.src,
    },
    rating: 3,
    createdAt: "2025-01-03T12:00:00Z",
    comment: "It was okay, not my favorite.",
    updatedAt: "2025-01-03T12:00:00Z",
  },
];
