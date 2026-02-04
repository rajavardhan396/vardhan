import { useState } from 'react';
import type { Recipe } from '@/types/recipe';

export const useRecipeGeneration = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateRecipes = async (ingredients: string[], _preferences: string[]) => {
    setIsLoading(true);
    // Mock API call
    setTimeout(() => {
      const mockRecipes: Recipe[] = [
        {
          id: '1',
          title: 'Simple Pasta',
          description: 'A delicious pasta dish with your ingredients.',
          ingredients: ingredients,
          instructions: ['Boil pasta', 'Add sauce', 'Serve'],
          prepTime: 10,
          cookTime: 15,
          servings: 4,
        },
        {
          id: '2',
          title: 'Veggie Stir Fry',
          description: 'Quick and healthy stir fry.',
          ingredients: ingredients,
          instructions: ['Chop veggies', 'Stir fry', 'Serve with rice'],
          prepTime: 15,
          cookTime: 10,
          servings: 2,
        },
      ];
      setRecipes(mockRecipes);
      setIsLoading(false);
    }, 2000);
  };

  const clearRecipes = () => {
    setRecipes([]);
  };

  return { recipes, isLoading, generateRecipes, clearRecipes };
};