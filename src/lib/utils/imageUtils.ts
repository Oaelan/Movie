export function getImageUrl(path: string | null, size: string = "w500") {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

  if (!path) {
    return null;
  }

  return `${IMAGE_BASE_URL}/${size}${path}`;
}
