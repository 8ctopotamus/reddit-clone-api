import mongoose from 'mongoose'

// mongoose Promise is depricated
mongoose.Promise = global.Promise

const { Schema } = mongoose

const postSchema = new Schema({
	title: { type: String, required: true},
	link: String,
	text: String,
	isDeleted: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
	_creator: { type: Schema.ObjectId, ref: 'User' },
	_comments: [{type: Schema.ObjectId, ref: 'Comment'}]
})

const Post = mongoose.model('Post', postSchema)

export default Post