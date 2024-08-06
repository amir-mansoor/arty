import Art from "../models/artModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const getArtsController = asyncHandler(async (req, res) => {
  const page = Number(req.params.id) || 1;
  const perPage = 2;

  const arts = await Art.find({})
    .sort({ createdAt: -1 })
    .lean()
    .limit(perPage)
    .skip(perPage * (page - 1));

  res.json(arts);
});

const uploadArt = asyncHandler(async (req, res) => {
  const { title, image } = req.body;

  const art = await Art.create({ title, image, user: req.user._id });
  console.log(art);
  req.user.arts.push(art._id);
  await req.user.save();
  res.status(201).json({ msg: "Art uploaded successfully" });
});

const toggleLike = asyncHandler(async (req, res) => {
  const art = await Art.findById(req.params.id);
  const isLiked = art.likes.find(
    (like) => like.toString() == req.user._id.toString()
  );

  if (isLiked) {
    art.likes = art.likes.filter(
      (like) => like.toString() !== req.user._id.toString()
    );
  } else {
    art.likes.push(req.user._id);
  }

  art.save();

  res.json({ msg: "toggle like" });
});

const comment = asyncHandler(async (req, res) => {
  const { comment } = req.body;

  const art = await Art.findById(req.params.id);

  art.comments.push({
    name: req.user.name,
    msg: comment,
    id: req.user._id,
  });

  await art.save();
  res.json({ msg: "comment added successfully" });
});

export { uploadArt, toggleLike, comment, getArtsController };
