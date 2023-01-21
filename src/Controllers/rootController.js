export const home = (req, res) => {
  console.log(req.path);
  return res.send("HOME");
};
