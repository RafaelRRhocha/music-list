export const readFavorite = () => {
  const response = localStorage.getItem('favoriteMusic');
  if (response) {
    return JSON.parse(response);
  } return null;
};

export const saveFavorite = (favoriteMusic: any) => {
  const respFavorite = readFavorite();
  if (respFavorite) {
    localStorage.setItem('favoriteMusic', (
      JSON.stringify([...respFavorite, favoriteMusic])
    ));
  } else {
    localStorage.setItem('favoriteMusic', JSON.stringify([favoriteMusic]));
  }
};

export const removeFavorite = (id: any) => {
  const respFavorite = readFavorite();

  localStorage.setItem('favoriteMusic', (
    JSON.stringify(respFavorite.filter((e: any) => e.id !== id))
  ));
};