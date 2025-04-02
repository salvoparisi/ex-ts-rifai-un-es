function isRecipe(data: unknown): boolean {
  if (
    data &&
    typeof data === 'object' &&
    'userId' in data &&
    typeof data.userId === 'number'
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

function isChef(data: unknown): boolean {
  if (
    data &&
    typeof data === 'object' &&
    'birthDate' in data &&
    typeof data.birthDate === 'string'
  ) {
    return true
  } else {
    return false
  }
}

async function getChefBirthdate(id: number): Promise<string | null> {
  try {
    const recipesId = await getChefId(id)
    const resChef = await fetch(`https://dummyjson.com/users/${recipesId}`)
    const dataChef = await resChef.json()
    if (isChef(dataChef)) {
      console.log(dataChef.birthDate)
      return dataChef.birthDate
    } else {
      throw new Error('Formato non valido')
    }
  } catch (err) {
    console.error(err)
    return null
  }
}

getChefBirthdate(3)



