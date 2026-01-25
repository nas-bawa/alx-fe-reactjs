// src/components/RecipeDetails.jsx
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(recipeId))
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
        <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
        </Link>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
