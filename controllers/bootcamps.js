//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success:true, message: 'Show all bootcamps' });
}

//@desc     Get single bootcamps
//@route    GET /api/v1/bootcamps
//@access   public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success:true, message: `get bootcamps ${req.params.id}` });
}

//@desc     Create new bootcamp
//@route    POST /api/v1/bootcamps/:id
//@access   private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success:true, message: 'Create new bootcamps' });
}

//@desc     Update bootcamps
//@route    PUT /api/v1/bootcamps/:id
//@access   private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success:true, message: `update bootcamps ${req.params.id}` });
}

//@desc     Delete bootcamps
//@route    DELETE /api/v1/bootcamps/:id
//@access   private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success:true, message: `delete bootcamps ${req.params.id}` });
}