export function getImageUrl(path: string, size: string = "w500") {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
  return `${IMAGE_BASE_URL}/${size}${path}`;
}
