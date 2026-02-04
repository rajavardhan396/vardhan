import { useState, useEffect } from 'react';
import type { Recipe } from '@/types/recipe';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('favoriteRecipes');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const isFavorite = (id: string) => {
    return favorites.some((recipe) => recipe.id === id);
  };

  const toggleFavorite = (recipe: Recipe) => {
    setFavorites((prev) => {
      const newFavorites = isFavorite(recipe.id)
        ? prev.filter((r) => r.id !== recipe.id)
        : [...prev, recipe];
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return { favorites, isFavorite, toggleFavorite };
};