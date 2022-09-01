const { Schema, model, Types} = require('mongoose');

//reactions schema
const ReactionsSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    
    }
  }
);

//Thoughts Schema
const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280
  },
   createdAt: {
    type: Date,
    default: Date.now
  },
   username: {
   type: String,
   required: true
  },
  reactions: [ReactionsSchema]
},
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  });

ThoughtSchema.virtual('reactionsCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;