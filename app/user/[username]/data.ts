import images from "@/constants/images";
import { UserType } from "@/types/user.type";

// Mock user data
export const usersData: UserType[] = [
  {
    _id: "1",
    name: "Sarah Johnson",
    username: "sarahJay",
    email: "sarah.johnson@example.com",
    avatar: images.avatar_1.src,
    bio: "Passionate home cook and food blogger. I love experimenting with seasonal ingredients and sharing family recipes that have been passed down through generations.",
    location: "San Francisco, CA",
    joinedDate: new Date(2023, 11, 21).toISOString(),
    stats: {
      recipesShared: 42,
      recipeSaved: 21,
      totalStar: 3021,
    },
    coverPhoto:
      "https://res.cloudinary.com/dgdoymhtj/image/upload/v1752175829/bueno%20food/cover-photo_kfxqje.webp",
  },
  {
    _id: "2",
    name: "maleek berry",
    email: "maleek.berry@example.com",
    username: "maleek213",
    avatar: images.avatar_2.src,
    bio: "Passionate home cook and food blogger. I love experimenting with seasonal ingredients and sharing family recipes that have been passed down through generations.",
    location: "Nigeria, Lagos",
    joinedDate: new Date(2023, 12, 22).toISOString(),
    stats: {
      recipesShared: 65,
      recipeSaved: 18,
      totalStar: 3053,
    },
    coverPhoto:
      "https://res.cloudinary.com/dgdoymhtj/image/upload/v1752175829/bueno%20food/cover-photo_kfxqje.webp",
  },
];

export const personalRecipes = [
  {
    id: "1",
    title: "Grandma's Apple Pie",
    image:
      "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=300&h=200&fit=crop",
    author: "Sarah Johnson",
    cookTime: 90,
    servings: 8,
    difficulty: "Medium" as const,
    rating: 4.8,
    reviews: 23,
    cuisine: "American",
    description:
      "A classic apple pie recipe passed down through generations with a perfectly flaky crust.",
  },
  {
    id: "2",
    title: "Mediterranean Quinoa Bowl",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop",
    author: "Sarah Johnson",
    cookTime: 25,
    servings: 4,
    difficulty: "Easy" as const,
    rating: 4.6,
    reviews: 18,
    cuisine: "Mediterranean",
    description:
      "Fresh and healthy quinoa bowl with Mediterranean vegetables and tahini dressing.",
  },
];

// Mock saved recipes
export const savedRecipes = [
  {
    id: "3",
    title: "Spicy Thai Curry",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=300&h=200&fit=crop",
    author: "Chef Marco",
    cookTime: 45,
    servings: 4,
    difficulty: "Hard" as const,
    rating: 4.9,
    reviews: 156,
    cuisine: "Thai",
    description: "Authentic Thai red curry with coconut milk and fresh herbs.",
  },
  {
    id: "4",
    title: "Chocolate Lava Cake",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop",
    author: "Baker Emma",
    cookTime: 30,
    servings: 2,
    difficulty: "Medium" as const,
    rating: 4.7,
    reviews: 89,
    cuisine: "French",
    description: "Decadent chocolate lava cake with a molten center.",
  },
];
