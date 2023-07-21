import mongoose from "mongoose"

const ComentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default mongoose.model("Comment", ComentSchema)