import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      bio: {
        type: String,
        default: 'Available',
      },
      profilePic: {
        type: String,
        default:
          'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
      },
      contacts: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    {
      timestamps: true,
    }
  );

const userModel = mongoose.model('User', userSchema);
export default userModel;
