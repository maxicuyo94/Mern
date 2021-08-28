import { Router } from "express";
const router = Router();

import * as videoCtrl from "./videos.controller";

router.post("/videos", videoCtrl.createVideos);
router.get("/videos", videoCtrl.getAllVideos);
router.get("/videos/:id", videoCtrl.getVideo);
router.put("/videos/:id", videoCtrl.updatedVideos);
router.delete("/videos/:id", videoCtrl.deleteVideos);

export default router;
