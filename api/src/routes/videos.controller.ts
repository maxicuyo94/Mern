import { RequestHandler } from "express";
import Video from "./videos";

export const createVideos: RequestHandler = async (req, res) => {
  const foundedVideo = await Video.findOne({ url: req.body.url });
  foundedVideo && res.status(301).json({ message: "The URL already exists" });
  const video = new Video(req.body);
  const savedVideo = await video.save();
  return res.json(savedVideo);
};

export const getAllVideos: RequestHandler = async (req, res) => {
  try {
    const allVideos = await Video.find();
    return res.json(allVideos);
  } catch (error) {
    return res.json(error);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  try {
    const foundedVideo = await Video.findById(req.params.id);
    return res.json(foundedVideo);
  } catch (error) {
    return res.json(error);
  }
};

export const updatedVideos: RequestHandler = async (req, res) => {
  try {
    const updatedVideo = await Video.findByIdAndUpdate(req.params.id, req.body);
    return res.json(updatedVideos);
  } catch (error) {
    return res.json(error);
  }
};

export const deleteVideos: RequestHandler = async (req, res) => {
  try {
    const foundedVideo = await Video.findByIdAndDelete(req.params.id);
    return res.json(foundedVideo);
  } catch (error) {
    return res.json(error);
  }
};
