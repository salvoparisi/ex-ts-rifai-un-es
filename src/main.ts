function isRecipe(data: unknown) {
  if (
    data &&
    typeof data === 'object' &&
    'userId' in data
  ) {
    return true
  } else {
    return false
  }
}

async function getChefId(id: number): Promise<number | null> {
  try {
    const resRecipes = await fetch(`https://dummyjson.com/recipes/${id}`)
    const dataRecipes = await resRecipes.json()
    if (isRecipe(dataRecipes)) {
      return dataRecipes.userId
    } else {
      throw new Error('Formato non valido')
    }
  } catch (err) {
    console.error(err)
    return null
  }
}

async function getChefBirthdate(id: number): Promise {

}




