import mongoose, {Schema} from "mongoose";
import mongooseAggregratePaginate from "mongoose-aggregate-paginate-v2"

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        video: {
            type: Schema.Types.ObjectId,
            ref: video
        },
        owner: {
            type: Schema.type.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)


commentSchema.plugin(mongooseAggregratePaginate)

export const Comment = mongoose.Schema.model("Commnet", commentSchema)
