import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { IngredientInput } from '@/components/IngredientInput';
import { DietaryFilters } from '@/components/DietaryFilters';
import { RecipeCard } from '@/components/RecipeCard';
import { LoadingState } from '@/components/LoadingState';
import { EmptyState } from '@/components/EmptyState';
import { useDietaryPreferences } from '@/hooks/useDietaryPreferences';
import { useRecipeGeneration } from '@/hooks/useRecipeGeneration';
import { useFavorites } from '@/hooks/useFavorites';
import type { Recipe } from '@/types/recipe';

const Index = () => {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState<string[]>([]);
  const { preferences, togglePreference } = useDietaryPreferences();
  const { recipes, isLoading, generateRecipes, clearRecipes } = useRecipeGeneration();
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleSearch = () => {
    generateRecipes(ingredients, preferences);
  };

  const handleViewRecipe = (recipe: Recipe) => {
    // Store recipe in sessionStorage for the detail page
    sessionStorage.setItem('currentRecipe', JSON.stringify(recipe));
    navigate(`/recipe/${recipe.id}`);
  };

  const hasSearched = recipes.length > 0 || isLoading;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What's in your kitchen?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enter the ingredients you have on hand, and our AI will suggest delicious recipes just for you.
          </p>
        </div>

        {/* Search Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Find Recipes
            </CardTitle>
            <CardDescription>
              Add your ingredients below and we'll find the perfect recipes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <IngredientInput
              ingredients={ingredients}
              onIngredientsChange={setIngredients}
              disabled={isLoading}
            />

            <DietaryFilters
              selected={preferences}
              onToggle={togglePreference}
              disabled={isLoading}
            />

            <div className="flex gap-3">
              <Button
                onClick={handleSearch}
                disabled={ingredients.length === 0 || isLoading}
                size="lg"
                className="flex-1 gap-2"
              >
                <Search className="h-4 w-4" />
                Find Recipes
              </Button>
              {recipes.length > 0 && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={clearRecipes}
                  disabled={isLoading}
                >
                  Clear
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        {isLoading && <LoadingState />}

        {!isLoading && recipes.length > 0 && (
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold">
              Recipes for You
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  isFavorite={isFavorite(recipe.id)}
                  onToggleFavorite={() => toggleFavorite(recipe)}
                  onViewDetails={() => handleViewRecipe(recipe)}
                />
              ))}
            </div>
          </div>
        )}

        {!isLoading && !hasSearched && (
          <EmptyState
            title="Ready to cook?"
            description="Add some ingredients above to get personalized recipe suggestions powered by AI."
          />
        )}
      </main>
    </div>
  );
};

export default Index;
