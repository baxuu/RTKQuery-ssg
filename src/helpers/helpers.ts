export const convertToSlug = (text: string): string => {
  return text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
};

export const convertFromSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
