/**
 * Utility function to get correct image path for GitHub Pages
 * Handles base URL for subdirectory deployment
 */
export function getImagePath(path) {
    // Get base URL from Vite (includes trailing slash for subdirectories)
    const baseUrl = import.meta.env.BASE_URL || '/';
    // If path already starts with baseUrl, return as is
    if (path.startsWith(baseUrl)) {
        return path;
    }
    // Remove leading slash from path if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // Combine base URL with image path
    // baseUrl already has trailing slash, so we don't need to add one
    return `${baseUrl}${cleanPath}`;
}
