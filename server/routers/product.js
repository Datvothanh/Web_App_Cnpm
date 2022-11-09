const express = require("express");
const router = express.Router();
const multer = require("multer");

const Product = require("../models/Product");

// @route GET api/posts
// @desc Get posts
// @access Private
/*
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({}).populate(
			'id_category',
			'category'
		);
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}); */


const storage = multer.diskStorage({
  destination: (req , file , callback) => {
    callback(null , "../client/public/uploads/")
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
})

const upload = multer({storage: storage});



// @route get api 
// tìm kiếm theo keyword 
/*
router.get(
  "/", asyncHandler(async function (req, res) {
    const keyword = req.params.keyword ? {
      name:{
        $regex: req.query.keyword,
        $options: "i", 
      },
    } : {};
    const products = await Product.find({...keyword});
    res.json(products)
  })
); */

router.get('/', async (req, res) => {
  const keyword = req.query.keyword ? {
    name: {
      $regex: req.query.keyword ,
      $options: "i",
    },
  }   : {};
  const products = await Product.find({ ...keyword });
  res.json({ success: true, products });
});

// @route POST api/products
// @desc  Create products
// @access Private
router.post("/", upload.single("img") ,(req, res) => {
 
  var str = req.file.path;
  var length = str.length;
  var path = str.slice(16, length); 
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    tinyDes: req.body.tinyDes,
    fullDes: req.body.fullDes,
    id_category: req.body.id_category,
    img: path,
    ram: req.body.ram,
    rom: req.body.rom,
    discount: req.body.discount
  });

  newProduct
    .save()
    .then(()=> res.json("New Product!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//DELETE PRODUCT
router.post("/delete" , async (req, res) => {
 
  
  const id = req.body.id;
  const products = await Product.deleteOne({_id: id});
 

  if (!products)
    return res.status(401).json({
        success: false,
        message: "Post not found or user not authorised",
      });
    res.json({
      success: true,
      message: "Delete success!",
      
    });
  


});

// // @route POST api/posts
// // @desc  Create posts
// // @access Private
// router.post("/", async (req, res) => {
//   const { title, description, url, status } = req.body;

//   //Simple validation
//   if (!title)
//     return res
//       .status(400)
//       .json({ success: false, message: "Titile is required" });

//   try {
//     const newProduct = new Product({
//       title,
//       description,
//       url: url.startsWith("https://") ? url : `https://${url}`,
//       status: status || "TO LEARN",
//       user: req.userId,
//     });
//     await newP.save();
//     res.json({ success: true, message: "Happy learning!", post: newProduct });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// });


// // @route PUT api/posts
// // @desc Update post
// // @access Private
// router.put("/:id", verifyToken, async (req, res) => {
//   const { title, description, url, status } = req.body;

//   //Simple validation
//   if (!title)
//     return res
//       .status(400)
//       .json({ success: false, message: "Titile is required" });

//   try {
//     let updatePost = {
//       title,
//       description: description || "",
//       url: (url.startsWith("https://") ? url : `https://${url}`) || "",
//       status: status || "TO LEARN",
//     };
//     const postUpdateCondition = { _id: req.params.id, user: req.userId };

//     updatePost = await Post.findOneAndUpdate(postUpdateCondition, updatePost, {
//       new: true,
//     });

//     //User not authorised to update post or post not found
//     if (!updatePost)
//       return res.status(401).json({
//         success: false,
//         message: "Post not found or user not authorised",
//       });

//     res.json({
//       success: true,
//       message: "Excellent progress!",
//       post: updatePost,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// });

// // @route DELETE api/posts
// // @desc DELETYE post
// // @access Private
// router.delete("/:id", verifyToken, async (req, res) => {
//   try {
//     const postDeleteCondition = { _id: req.params.id, user: req.userId };
//     const deletePost = await Post.findOneAndDelete(postDeleteCondition);

//     //User not authorised to update post or post not found
//     if (!deletePost)
//       return res.status(401).json({
//         success: false,
//         message: "Post not found or user not authorised",
//       });

//     res.json({
//       success: true,
//       message: "Delete success!",
//       post: deletePost,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// });
module.exports = router;
