export const getArt = (req: any, res: any) => {
  const id = req.params.searchTerm;
  res.send([
    {
      imageUrl: "http://www.bildarchivaustria.at/Preview/10233488.jpg",
      artistName: "Ella marke",
    },
  ]);
};
