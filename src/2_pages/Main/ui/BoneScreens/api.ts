import { useQuery } from "react-query";

export const useAlbumImages = (directory: string) => {
  return useQuery(
    ["images", directory],
    async () => {
      const res = await fetch(
        `/api/albums?directory=${encodeURIComponent(directory)}`
      );
      const data = await res.json();
      return data.Contents || [];
    },
    {
      enabled: !!directory,
    }
  );
};
