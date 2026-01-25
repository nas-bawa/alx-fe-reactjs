import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom'; // ✅ Required

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ Used to redirect

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // ✅ Redirect to homepage after deletion
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '10px', color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
