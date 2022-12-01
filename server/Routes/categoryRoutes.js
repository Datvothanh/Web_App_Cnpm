import express from "express";
import Category from "./../Models/CategoryModel.js";
import asyncHandler from "express-async-handler";
const categoryRouter = express.Router();

categoryRouter.get("/", async (req, res) => {
  try {
    const categories = await Category.find({ });
    res.json({ success: true, categories });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});


categoryRouter.post("/",async (req, res) => {
  const {name} = req.body;

  //Simple validation
  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "Tên loại sản phẩm chưa nhập" });

  try {
    const newCategory = new Category({
      name,
    });
    await newCategory.save();
    res.json({ success: true, message: "Tạo loại sản phẩm thành công", category: newCategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});


// DELETE CATEGORY
categoryRouter.delete("/:id",  async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (category) {
      await category.remove();
      res.json({ message: "Đã xóa loại sản phẩm" });
    } else {
      res.status(404);
      throw new Error("Không tìm thấy loại sản phẩm");
    }
});


export default categoryRouter;